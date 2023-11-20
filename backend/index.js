const puppeteer = require("puppeteer");
const express = require("express");
const app = express();
const stores = require("./stores");

const search = async (keyword) => {
  let browser = await puppeteer.launch({ headless: false });
  let response = [];

  console.log("searching for: " + keyword);

  for (const store of stores) {
    const page = await browser.newPage();
    try {
      await page.goto(`${store.searchUrl}${keyword}`);
      await page.waitForSelector(store.selectors.product, { timeout: 5000 });
    } catch (error) {
      console.log(`Can't find selector within timeout`);
      response.push({ store: store.name, products: [] });
      continue;
    }

    async function scrollPage() {
      await page.evaluate(async () => {
        await new Promise((resolve, reject) => {
          let totalHeight = 0;
          const distance = 100;
          const delay = 20; // Adjust delay if necessary

          const scrollInterval = setInterval(() => {
            const scrollHeight = document.body.scrollHeight;
            window.scrollBy(0, distance);
            totalHeight += distance;

            if (totalHeight >= scrollHeight) {
              // You can adjust the max scroll height here
              clearInterval(scrollInterval);
              resolve();
            }
          }, delay);
        });
      });
    }

    // Scroll the page
    await scrollPage();

    const productData = await page.evaluate((store) => {
      const productItem = Array.from(
        document.querySelectorAll(store.selectors.product)
      );
      return productItem.map((item) => {
        const name =
          item
            .querySelector(store.selectors.product_name)
            ?.textContent?.trim() || "null";
        const price =
          item
            .querySelector(store.selectors.product_price)
            ?.textContent?.trim() || "null";
        const image =
          item
            .querySelector(store.selectors.product_img)
            ?.getAttribute("src") || "null";
        const link =
          item
            .querySelector(store.selectors.product_link)
            ?.getAttribute("href") || "null";
        return { name, price, image, link };
      });
    }, store);

    response.push({ store: store.name, products: productData });

    await page.close();
  }

  await browser.close();
  return response;
};

app.get("/", (req, res) => {
  res.send("<h1>Main page</h1>");
});

app.get("/search/:keyword", async (req, res) => {
  const keyword = req.params.keyword;
  res.json(await search(keyword));
});

app.listen(3001, () => {
  console.log(`Server is listening at http://localhost:3001`);
});
