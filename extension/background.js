chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.type === "detectedCompany") {
        console.log("Background received company:", message.company, message.symbol);
        
        chrome.storage.local.set({
            detectedCompany: message.company,
            detectedSymbol: message.symbol
        });

        sendResponse({ status: "Company stored successfully" });
    }
});