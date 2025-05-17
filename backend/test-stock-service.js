const { getStockPrice } = require("./stock-service");

async function test() {
    try {
        const symbol = "TSLA";
        const price = await getStockPrice(symbol);
        console.log(`The latest stock price for ${symbol} is: $${price}`);
    } catch (error) {
        console.error("Test failed:", error.message);
    }
}

test();
