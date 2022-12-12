'use strict'


// if(window.innerWidth < 768)
// profileName = document.querySelector('.text-heading-xlarge').innerText;
// profileContacts = Array.from(document.querySelectorAll(".contact-value")).map(el => el.innerText)
// if(window.innerWidth >= 768 && window.innerWidth < 992) profileName = document.querySelector('[dir=ltr]').innerText;
// profileContacts = Array.from(document.querySelectorAll(".pv-contact-info__ci-container")).map(el => el.innerText)
// if(window.innerWidth > 1501) {
// profileName = document.querySelector('.text-heading-xlarge').innerText;
// profileContacts = Array.from(document.querySelectorAll(".pv-contact-info__ci-container")).map(el => el.innerText)
// }

let profileName, profileContacts;
const getInfoFromProvile = () =>{
  if(window.innerWidth < 800)
    profileName = document.querySelector('.text-heading-xlarge.inline.t-24.v-align-middle.break-words').innerText;
    profileContacts = Array.from(document.querySelectorAll(".contact-value")).map(el => el.innerText)
  if(window.innerWidth > 800) profileName = document.querySelector('span[dir="ltr"]').innerText;
  profileContacts = Array.from(document.querySelectorAll(".contact-value")).map(el => el.innerText)
console.log(profileName)
console.log(profileContacts)
return [profileName,profileContacts]
}
const profileInfo = getInfoFromProvile()
function handleResponse(message) {
    console.log(`Message from the background script: ${message.response}`);
  }


 function notifyBackgroundPage(e) {
  console.log('KLKLKLKLKLKLKLKLKLKLKLKLKLKLKLKL')
    const sending = chrome.runtime.sendMessage({
      greeting: profileInfo,
    });
    sending.then(handleResponse);
  }

function getReponseFromPopup(e) {
  console.log('pop')
  chrome.runtime.onMessage.addListener((incomeResponse)=>{
      if (incomeResponse.action === 'initiateFunction') {
        notifyBackgroundPage()
      }
    });
  }

getReponseFromPopup()

chrome.storage.local.get(["key"]).then((result) => {
        console.log("Value currently is " + result.key);
      });

      function foo() {
        console.log("I'm defined in background.js");
      }




