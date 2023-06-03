// content.js
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
  if (message.action === "fillField") {
    var inputField = document.querySelector('input[type="text"][name="title"]');
    var textareaField = document.querySelector('textarea[name="description"]');
    if (inputField) {
      inputField.value = message.value;  // Use the value from the message
      inputField.dispatchEvent(new Event('input', { bubbles: true })); // Trigger the 'input' event for validation
    }
    if (textareaField) {
      textareaField.value = message.value;  // Use the value from the message
      textareaField.dispatchEvent(new Event('input', { bubbles: true })); // Trigger the 'input' event for validation
    }
  }
});
