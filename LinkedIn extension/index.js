


document.querySelector('.uploadInfoBtn1').addEventListener("click", ()=> {chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {
      action: "initiateFunction"
    },  (response) => {
        document.getElementById("success").innerHTML = "Successfully Parsed";
        console.log("success")});
  });})




// document
// .querySelector('#colour-submit-btn')
// .addEventListener('click', () => {
//   // read the colour that the user has selected
//   const colour = document.querySelector('#colour-input').value;
//   // get all the google tabs and send a message to their tabs
//   chrome.tabs.query({ url: 'https://*.google.com/*' }, tabs => {
//     tabs.forEach(tab =>
//       chrome.tabs.sendMessage(tab.id, { colour } )
//     );
//   });
// });

// document.querySelector('.show-btn').addEventListener("click", ()=> {
//     console.log(123)
//     document.querySelector('.show-btn').innerHTML = "123"
// })

// document.querySelector('.show-btn').addEventListener("click", ()=> {
//     // alert(this.attr('href'))
//     alert(123)
// })

// var tab_title = '';
// function display_h1 (results){
//   h1=results;
//   document.querySelector("#id1").innerHTML = "<p>tab title: " + tab_title + "</p><p>dom h1: " + h1 + "</p>";
// }
// chrome.tabs.query({active: true}, function(tabs) {
//   var tab = tabs[0];
//   tab_title = tab.title;
//   chrome.tabs.executeScript(tab.id, {
//     code: 'document.querySelector("h1").textContent'
//   }, display_h1);
// });


// document.

// document.querySelector('#id1').addEventListener("click", () => {alert(document.querySelector(this.innerHTML))})

// chrome.storage.local.get(["key"]).then((result) => {
//     document.querySelector('#id1').innerHTML = result.key
//   });

// let page = chrome.test.getBackgroundPage();
// page.foo();

// function notifyBackgroundPage(e) {
//     const sending = chrome.runtime.sendMessage({
//         greeting: profileInfo,
//     });
//     sending.then(handleResponse);
// }

// const yourButtonElement = document.getElementById("someID");
// yourButtonElement.addEventListener("click", notifyBackgroundPage)