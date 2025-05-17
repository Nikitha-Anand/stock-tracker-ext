const axios = require("axios");
require("dotenv").config();

const API_KEY = process.env.ALPHA_VANTAGE_API_KEY;
const BASE_URL = "https://www.alphavantage.co/query";

async function getStockPrice(symbol) {
    try {
        const response = await axios.get(BASE_URL, {
            params: {
                function: "TIME_SERIES_INTRADAY",
                symbol: symbol,
                interval: "1min",
                apikey: API_KEY,
            },
        });

        const timeSeries = response.data["Time Series (1min)"];
        if (!timeSeries) throw new Error("Invalid API response");

        const latestTimestamp = Object.keys(timeSeries)[0];
        const latestPrice = timeSeries[latestTimestamp]["4. close"];

        return latestPrice;
    } catch (error) {
        console.error("Error fetching stock price:", error.message);
        throw error;
    }
}

module.exports = { getStockPrice };