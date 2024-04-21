# Webpage Anchor Tag Scraper

This Node.js script scrapes anchor tags (links) from a webpage and extracts their titles and href attributes using the x-ray package.

## Table of Contents

- [Introduction](#introduction)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Example](#example)

## Introduction

This script allows users to scrape anchor tags (links) from a webpage and extract their titles and href attributes. It provides a simple command-line interface (CLI) for specifying the URL of the webpage to be scraped.

## Prerequisites

Before using this script, ensure you have the following prerequisites installed:

- Node.js: [Download and install Node.js](https://nodejs.org/)
- npm (Node Package Manager): Included with Node.js installation

## Installation

To install the required dependencies, run the following command in your terminal:

```bash
npm install
```

## Usage

- To use the script, run the following command in your terminal:

```bash
node index.js --url=<URL>
```
-Replace <URL> with the URL of the webpage you want to scrape.

## Example

- example of how to use the script with a specific URL:

```bash
node index.js --url=https://example.com
```
