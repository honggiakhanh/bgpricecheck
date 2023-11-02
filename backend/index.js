const puppeteer = require("puppeteer");
const express = require("express");
const app = express();
const stores = require("./stores");

const main = async (keyword) => {
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

    const productData = await page.evaluate((store) => {
      const productItem = Array.from(
        document.querySelectorAll(store.selectors.product)
      );
      return productItem.map((item) => {
        const name =
          item
            .querySelector(store.selectors.product_name)
            ?.textContent?.trim() || "N/A";
        const price =
          item
            .querySelector(store.selectors.product_price)
            ?.textContent?.trim() || "N/A";
        return { name, price };
      });
    }, store);

    response.push({ store: store.name, products: productData });

    await page.close();
  }

  await browser.close();
  console.log(response);
  return response;
};

app.get("/", (req, res) => {
  res.send("<h1>Main page</h1>");
});

app.get("/search/:keyword", async (req, res) => {
  const keyword = req.params.keyword;
  res.json(await main(keyword));
});

app.listen(3001, () => {
  console.log(`Server is listening at http://localhost:3001`);
});
