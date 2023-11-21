module.exports = [
  {
    name: "lautapelit",
    baseUrl: "https://en.lautapelit.fi",
    searchUrl: "https://en.lautapelit.fi/search/?q=",
    selectors: {
      product: ".ListItem",
      product_name: ".ProductName a",
      product_price: ".ProductPrice",
      product_img: ".ProductImageContainer img",
      product_link: ".ProductName a",
    },
  },
  {
    name: "adlibris",
    baseUrl: "https://www.adlibris.com",
    searchUrl:
      "https://www.adlibris.com/fi/haku?filter=categoryfacet%3Alautapelit+%26+palapelit&q=",
    selectors: {
      product: ".search-result__list-view__product__wrapper",
      product_name: ".heading--searchlist-title a",
      product_price: ".price span",
      product_img: `img[itemprop="image"]`,
      product_link: ".heading--searchlist-title a",
    },
  },
  {
    name: "verkkokauppa",
    baseUrl: "https://www.verkkokauppa.com",
    searchUrl:
      "https://www.verkkokauppa.com/fi/search?filter=category%3Aparty_games_and_board_games&query=",
    selectors: {
      product: ".sc-1p6yk7n-1",
      product_name: "a[title]",
      product_price: ".Price-sc-1eckydb-2",
      product_img: "img",
      product_link: "a[title]",
    },
  },
  // {
  //   name: "puolenkuunpelit",
  //   baseUrl: "https://www.puolenkuunpelit.com/kauppa/",
  //   searchUrl: "https://www.puolenkuunpelit.com/kauppa/advanced_search_result.php?keywords=",
  //   selectors: {
  //     product: 'tr[class=""]',
  //     product_name: 'td[class="productListing-data"] > a > b',
  //     product_price: "b.commonPrice",
  //     product_img: "td.productListing-data:nth-child(1) > a > img",
  //     product_link: 'td.productListing-data:nth-child(1) > a',
  //   },
  // }
];