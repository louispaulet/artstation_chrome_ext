// content.js
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
  if (message.action === "fillField") {
    var inputField = document.querySelector('input[type="text"][name="title"]');
    var textareaField = document.querySelector('textarea[name="description"]');

    if (textareaField && inputField) {
      loadJsonFile("filename_to_prompt.json").then(function(data) {
        if (data.prompt.hasOwnProperty(message.value)) {
            
          inputField.value = (data.prompt[message.value]).substring(0, 100);  
          inputField.dispatchEvent(new Event('input', { bubbles: true })); // Trigger the 'input' event for validation
      
          textareaField.value = data.prompt[message.value];
          textareaField.dispatchEvent(new Event('input', { bubbles: true })); // Trigger the 'input' event for validation
        }
      }).catch(function(error) {
        console.error("Error loading JSON file:", error);
      });
    }
  }
});

function loadJsonFile(filename) {
  return new Promise(function(resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.overrideMimeType("application/json");
    xhr.open("GET", chrome.extension.getURL(filename), true);
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          try {
            var data = JSON.parse(xhr.responseText);
            resolve(data);
          } catch (error) {
            reject(error);
          }
        } else {
          reject(new Error("Failed to load JSON file"));
        }
      }
    };
    xhr.send(null);
  });
}
