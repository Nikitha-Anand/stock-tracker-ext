const express = require("express"); 
const http = require("http");
require("dotenv").config();
const stockService = require("./stock-service");
const cors = require('cors');

const app = express();
const server = http.createServer(app);
const PORT = process.env.PORT;

app.use(express.json());
app.use(cors());

server.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

app.get("/stock/:symbol", async (req, res) => {
    try {
        const symbol = req.params.symbol;
        const stockPrice = await stockService.getStockPrice(symbol);
        res.json({ symbol, price: stockPrice });
    } catch (error) {
        res.status(500).json({ error: "Error fetching stock price" });
    }
});