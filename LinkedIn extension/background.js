


function handleMessage(request, sender, sendResponse) {
    console.log(`A content script sent a message: ${request.greeting}`);
    chrome.storage.local.set({"name": request.greeting})
    chrome.storage.local.set({ "key": request.greeting }).then(() => {
      console.log("Value is set to " + "value");
    });
    sendResponse({ response: "Response from background script" });
    postRequest((request.greeting))
  }
chrome.runtime.onMessage.addListener(handleMessage);

const postRequest = async (info) => {
  const rawResponse = await fetch('http://localhost:5555/info/getinfo', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(info)
  });
return true
  // const content = await rawResponse.json();

  // console.log(content);
};

function foo() {
  console.log("I'm defined in background.js");
}