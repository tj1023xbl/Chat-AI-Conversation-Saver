(async () => {
    const tabs = await chrome.tabs.query({
        active: true,
        currentWindow: true
    }, function(tabs){
        var tabUrl = tabs[0].url;
        console.log(tabUrl);
    });
})();


