// content.js
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
  if (message.action === "fillField") {
    var inputField = document.querySelector('input[type="text"][name="title"]');
    var textareaField = document.querySelector('textarea[name="description"]');
    if (inputField) {
      inputField.value = config.title;
      inputField.dispatchEvent(new Event('input', { bubbles: true })); // Trigger the 'input' event for validation
    }
    if (textareaField) {
      textareaField.value = config.title;
      textareaField.dispatchEvent(new Event('input', { bubbles: true })); // Trigger the 'input' event for validation
    }
  }
});
