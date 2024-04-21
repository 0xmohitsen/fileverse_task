const Xray = require("x-ray"); // Imported Xray package
const fs = require("fs"); // Imported file system ( fs ) package

const xray = new Xray(); // Created x-ray object and stored in xray variable

const url = process.argv[2] || ""; // Get url from CLI argument

// Check whether url is provided or not
if (!url) {
  console.error("Please specify a URL \nFormat: node index.js <URL>");
  process.exit(1);
}

// Scrape anchor tags and extract titles and href attributes
xray(url, "a", [
  {
    Title: "", // Extract the text content of the anchor tag
    Links: "@href", // Extract the href attribute of the anchor tag
  },
])(function (err, links) {
  if (err) {
    console.error("Error:", err);
    return;
  }

  // Remove duplicates
  const uniqueLinks = links.filter(
    (link, index, self) =>
      index ===
      self.findIndex((l) => l.Title === link.Title && l.Href === link.Href)
  );

  // Write the results to a JSON file
  fs.writeFile(
    "results.json",
    JSON.stringify(uniqueLinks, null, 2),
    function (err) {
      if (err) {
        console.error("Error writing to file:", err);
        return;
      }
      console.log("Scraping completed. Results saved to results.json");
    }
  );
});
