'use strict';

chrome.runtime.onInstalled.addListener(function () {
    chrome.storage.sync.set({ color: '#3aa757' }, function () {
        console.log("The color is green.");
    });
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function () {
        chrome.declarativeContent.onPageChanged.addRules([{
            conditions: [
                new chrome.declarativeContent.PageStateMatcher({
                    pageUrl: {
                        hostSuffix: 'atlassian.net',
                        pathContains: 'browse'
                    },
                })
            ],
            actions: [
                new chrome.declarativeContent.ShowPageAction(),
            ]
        }]);
    });
    // chrome.tabs.getSelected(null, function (tab) {
    //     chrome.tabs.executeScript(tab.id, { file: 'changeURL.js' });
    // });
});