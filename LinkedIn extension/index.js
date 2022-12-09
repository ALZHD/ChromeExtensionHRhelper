
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