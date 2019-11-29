// let changeURL = document.getElementById('openOldIssueView');

// changeURL.onclick = function updateURL(){
//     console.log('Called event listener');
//     let currentURL = window.location.toString();
//     let updatedURL = `${currentURL}?oldIssueView=true`;
//     chrome.tabs.query({active: true, currentWindow: true}, function listOfTabs(tabs){
//         chrome.tabs.executeScript(
//             tabs[0].id,
//             {
//                 code: `window.open(${updatedURL});`
//             }
//         );
//     });
// }