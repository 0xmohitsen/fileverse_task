 // Imported file system ( fs ) package
const fs = require("fs");

// Imported scrape module
const scrape = require("./scraper"); 

// Get url from CLI argument
const index = 2;
const url = process.argv[index]; 

// Check whether url is provided or not
if (!url) {
  console.error("Please specify a URL \nFormat: node index.js <URL>");
  process.exit(1);
}

// Call the scraper function 
scrape(url)
  .then((links) => {
    // Remove duplicates
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
