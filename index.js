const fs = require("fs"); // Imported file system ( fs ) package
const scrape = require("./scraper"); // Imported scrape module

const url = process.argv[2] || ""; // Get url from CLI argument

// Check whether url is provided or not
if (!url) {
  console.error("Please specify a URL \nFormat: node index.js <URL>");
  process.exit(1);
}

// Call the scraper function 
scrape(url)
  .then((links) => {
    // Process the scraped data
    const uniqueLinks = links.filter(
        (link, index, self) =>
          index ===
          self.findIndex((l) => l.Title === link.Title && l.Href === link.Href)
      );
    // Write the results to a JSON file
    fs.writeFile("results.json", JSON.stringify(uniqueLinks, null, 2), (err) => {
      if (err) {
        console.error("Error writing to file: ", err);
      } else {
        console.log("Scraping completed. Results saved to results.json");
      }
    });
  })
  .catch((err) => {
    console.error("Error: ", err);
  });
