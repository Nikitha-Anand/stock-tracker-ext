const companyList = {
    "AAPL": "apple",
    "GOOGL": "google",
    "NVDA": "nvidia",
    "TSLA": "tesla",
    "AMZN": "amazon"
};

function extractTextFromPage() {
    let text = document.title.toLowerCase();

    document.querySelectorAll("h1, h2, h3").forEach(element => {
        text += " " + element.innerText.toLowerCase();
    });

    return text;
}

function findCompany(text, companyList) {
    for (const [symbol, name] of Object.entries(companyList)) {
        if (text.includes(name)) {
            return { symbol, name };
        }
    }
    return null;
}

function createStockButton(company) {
    const button = document.createElement("button");
    button.innerText = `$ ${company.symbol}`;
    button.style.position = "fixed";
    button.style.top = "10px";
    button.style.right = "10px";
    button.style.padding = "10px";
    button.style.backgroundColor = "#007BFF";
    button.style.color = "white";
    button.style.border = "none";
    button.style.borderRadius = "5px";
    button.style.cursor = "pointer";
    button.style.zIndex = "9999";
    button.style.fontSize = "14px";
    button.style.boxShadow = "2px 2px 10px rgba(0, 0, 0, 0.3)";

    document.body.appendChild(button);
}

async function fetchStockPrice(symbol) {
    try {
        const response = await fetch(`http://localhost:3000/stock/${symbol}`);
        const data = await response.json();
        return data.price;
    } catch (error) {
        console.error("Error fetching stock price:", error);
        return null;
    }
}

async function runContentScript() {
    const text = extractTextFromPage();
    console.log("Scanned Text:", text);

    const company = findCompany(text, companyList);
    if (company) {
        console.log(`Found: ${company.name} (${company.symbol})`);

        chrome.storage.local.set({ detectedCompany: company.name, detectedSymbol: company.symbol });

        createStockButton(company);
    } else {
        console.log("No matching company name found in the text.");
    }
}

runContentScript();
