var key = $("div#issuecard div.key strong").text()
var title = $("div#issuecard h4.summary").text()
var url = window.location.href

var text = ' - [ ][' + key + ' ' + title + '](' + url+ ')'

saveToClipboard(text)

function saveToClipboard(str) {
  // copy 用に textareaを作る
  var textArea = document.createElement("textarea");
  textArea.style.cssText = "position:absolute;left:-100%";

  document.body.appendChild(textArea);

  textArea.value = str;
  textArea.select();
  document.execCommand("copy");

  document.body.removeChild(textArea);
}
