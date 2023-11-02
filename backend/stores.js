module.exports = [
  {
    name: "lautapelit",
    searchUrl: "https://en.lautapelit.fi/search/?q=",
    selectors: {
      product: ".ListItem",
      product_name: ".ProductName a",
      product_price: ".ProductPrice",
    },
  },
  {
    name: "adlibris",
    searchUrl:
      "https://www.adlibris.com/fi/haku?filter=categoryfacet%3Alautapelit+%26+palapelit&q=",
    selectors: {
      product: ".search-result__list-view__product__wrapper",
      product_name: ".heading--searchlist-title a",
      product_price: ".price span",
    },
  },
  {
    name: "verkkokauppa",
    searchUrl:
      "https://www.verkkokauppa.com/fi/catalog/1552b/Pelit-ja-oppiminen?query=",
    selectors: {
      product: ".sc-1p6yk7n-1",
      product_name: "a[title]",
      product_price: ".Price-sc-1eckydb-2",
    },
  },
  {
    name: "puolenkuunpelit",
    searchUrl:
      "https://www.puolenkuunpelit.com/kauppa/advanced_search_result.php?keywords=",
    selectors: {
      product: 'tr[class=""]',
      product_name: 'td[class="productListing-data"] a b',
      product_price: "b.commonPrice",
    },
  },
];