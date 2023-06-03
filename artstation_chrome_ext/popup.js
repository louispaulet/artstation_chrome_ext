// popup.js
document.getElementById('fillButton').addEventListener('click', function() {
  // Get the value from the text field
  var textFieldValue = document.getElementById('textField').value;

  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {
      action: 'fillField',
      value: textFieldValue  // Use the value from the text field
    });
  });
});
