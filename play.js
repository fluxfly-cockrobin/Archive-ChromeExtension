chrome.contextMenus.create({
    id: "Archive",
    title: "Archive",
    contexts: ["selection"]
})

chrome .contextMenus.onClicked.addListener(function (info, tab) {
    if(info.menuItemId){
        //`${info.menuItemId} ${variableName}`
        const variableName = info.selectionText;
        chrome.tabs.create({ url: `https://archive.org/search?query=${variableName}`});
        chrome.tabs.create({ url: `https://web.archive.org/web/20250000000000*/${variableName}`});
        
    }
});
