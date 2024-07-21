# Taiko Book Scraper with Gauge

## Description
This project automates the process of navigating through the "Books to Scrape" website and capturing screenshots of book pages using Taiko with Gauge.

## Requirements
- Node.js
- Gauge
- Taiko

## Installation
1. Install Node.js from [nodejs.org](https://nodejs.org/).
2. Install Gauge:

   npm install -g @getgauge/cli

## Set the environment variable for headless Chrome (optional):
   export headless_chrome=true

## Run the Gauge specification
   gauge run specs/book_scraper.spec


### How to Use

1. **Navigate to the Project Directory**: Ensure you are in the project directory where the `step_implementation.js` and 
    `specs/example.  spec` files are located.
2. **Run the Gauge Specification**:
     gauge run specs/example.spec

# Book Scraper Specification

## Capture screenshots of books from the "Travel" category

* goto url
* Click Book <Sharp Objects>
* Screen
* goBack
* Click Book <In a Dark, Dark ...>
* Screen
* goBack
* Click next page
* Click Book <The Past Never Ends>
* Screen
* goBack
* Click Book <A Murder in Time>
* Screen
* goBack
...

By following these instructions, the script should work correctly, and you will be able to capture screenshots from the "Books to Scrape" website using Taiko with Gauge.

