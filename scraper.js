const Xray = require("x-ray"); // Imported Xray package

const xray = new Xray(); // Created x-ray object and stored in xray variable

// Define target element
const target = "a";

// Define the scraping function
const scrape = (url) => {
    return new Promise((resolve, reject) => {
      xray(url, target, [{ Title: "", Links: "@href" }])((err, links) => {
        if (err) {
          reject(err);
        } else {
          resolve(links);
        }
      });
    });
  }

module.exports = scrape;