document.addEventListener("DOMContentLoaded", async function () {
    const companyNameElement = document.getElementById("company-name");
    const fetchPriceButton = document.getElementById("fetch-price");
    const stockPriceElement = document.getElementById("stock-price");

    chrome.storage.local.get(["detectedCompany", "detectedSymbol"], function (data) {
        console.log("Retrieved from storage:", data);

        if (data.detectedCompany && data.detectedSymbol) {
            companyNameElement.textContent = `Company: ${data.detectedCompany.toUpperCase()}`;
            fetchPriceButton.dataset.symbol = data.detectedSymbol;
            console.log("Stock symbol set to:", data.detectedSymbol);
        } else {
            companyNameElement.textContent = "No company detected!";
            fetchPriceButton.disabled = true;
        }
    });

    fetchPriceButton.addEventListener("click", async function () {
        const symbol = fetchPriceButton.dataset.symbol;
        console.log("Fetching stock price for:", symbol);

        if (!symbol) return;

        try {
            const response = await fetch(`http://localhost:3000/stock/${symbol}`);
            console.log("Response received:", response);

            const result = await response.json();
            console.log("Fetched stock price:", result);

            if (result.price) {
                stockPriceElement.textContent = `LTP: $${result.price}`;
            } else {
                stockPriceElement.textContent = "Error fetching price!";
            }
        } catch (error) {
            stockPriceElement.textContent = "Server error!";
            console.error("Error fetching stock price:", error); 
        }
    });
});
