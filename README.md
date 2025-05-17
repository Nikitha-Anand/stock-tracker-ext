# Stock Price Tracker Chrome Extension

Stock Tracker is a lightweight, intelligent Chrome extension that detects company names while you're reading online (e.g., on news sites or financial blogs) and provides an instant stock symbol preview and real-time pricing.
<p align="center">
  <img src="https://github.com/user-attachments/assets/f4f54064-af5d-4186-82c8-c01741bb8a46" alt="stock-price-demo" width="300"/>
</p>

---

## Key Features:

- Context-Aware Detection: Scans web pages for company names and adds a box showing the stock ticker.

- Real-Time Stock Price Fetching: One click fetches the latest price using Alpha Vantage's API.

- Minimal UI, Maximum Clarity: Simple and focused interface with company name, ticker, and latest traded price.

- Perfect for News Readers: Especially useful when reading finance articles or tech news — no need to switch tabs.

- Lightweight: Built with vanilla JS, optimized for performance.

---

## Demo

#### Here’s how it works:

When reading an article that mentions a tracked company (e.g., Apple), a small ticker bubble appears:
<kbd style="background:#007bff;color:white;border-radius:4px;padding:2px 4px;">$AAPL</kbd>

Click the extension icon to open the popup:

- Shows the detected Company Name

- Tap 'Get Price' to retrieve the Live Stock Price (LTP).

---

## Tech Stack

| Component | Technology      |
|:----------|:---------------:|
|UI         |HTML5, CSS3      |
|Logic      |JavaScript       |
|Data API   |Alpha Vantage API|
|Platform   |Chrome Extension |

---

## Installation

- Clone the repo:
  ```
  git clone https://github.com/Nikitha-Anand/stock-tracker-ext.git
  cd stock-tracker-ext
  
- Navigate to chrome://extensions/.

- Enable Developer Mode (top-right).

- Click Load unpacked and select **extension** folder in the cloned project folder.

---

## How It Works

- The extension injects a content script into every loaded page.

- It parses the visible text for matches in a predefined list of popular companies. (Apple, Google, Tesla, Nvidia, Amazon)

- When it finds a match, it shows a floating badge with the ticker.

- On clicking the extension:

  - It displays the corresponding company name.

  - Pressing "Get Price" fetches and shows the latest traded price (LTP) from Alpha Vantage.

---

## Permissions Used

| Permission | Purpose     |
|:-----------|:-----------:|
|activeTab   |To access current page content for detection |
|storage     |To cache user data/tickers |
|https://www.alphavantage.co/query |To fetch live price data|

This extension does not track or transmit personal information.

---

## Future Improvements

- Micro-charts for historical data
- Usage of IBKR API

---

## Contributing
- Pull requests are welcome! To contribute:
  ```
  git checkout -b feature-name
  git commit -m "Add feature"
  git push origin feature-name
Then open a Pull Request.

---

## License

Distributed under the MIT License. See LICENSE for more information.
