
let elem = Array.from(document.querySelectorAll('a'))


elem.map(item => item.classList.add('black'))

class User {
    constructor(id, name){
        this.id = id
        this.name = name
    }
}
let profileName, profileContacts;
const getInfoFromProvile = () =>{
  if(window.innerWidth < 800)
    profileName = document.querySelector('.text-heading-xlarge.inline.t-24.v-align-middle.break-words').innerText;
    profileContacts = Array.from(document.querySelectorAll(".contact-value")).map(el => el.innerText)
  if(window.innerWidth > 800) profileName =document.querySelector('span[dir="ltr"]').innerText;
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
    const sending = chrome.runtime.sendMessage({
      greeting: profileInfo,
    });
    sending.then(handleResponse);
  }
  window.addEventListener("load", notifyBackgroundPage);


chrome.storage.local.get(["key"]).then((result) => {
        console.log("Value currently is " + result.key);
      });

      function foo() {
        console.log("I'm defined in background.js");
      }
