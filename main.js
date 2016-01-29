(function() {
var url = window.location.href
if (!/http[s]?:\/\/.*backlog.jp\/view.*/.test(url)) {
    return;
}

var key = $('div#issuecard div.key strong').text()

var title = $('div#issuecard h4.summary').text()
var spChars = { '[': '(', ']': ')' };
var titleEscaped = title.replace(/[\[\]]/g, function(c) { return spChars[c] })

var hashIndex = url.indexOf('#')
if (hashIndex != -1) url = url.substr(0, hashIndex)

var text = '- [ ][' + key + ' ' + titleEscaped + '](' + url + ')'

saveToClipboard(text)

$.notifyBar({
  html: 'クリップボードにコピーしました ' + text,
  cssClass: 'flash_message'
})

$('.flash_message').css({
  'color': 'white',
  'background': '#e74c3c',
  'text-align': 'center',
  'line-height': '3em',
  'font-weight': 'bold'
})
})()

function saveToClipboard(text) {
  var textArea = document.createElement('textarea')
  textArea.style.cssText = 'position:absolute;left:-100%'

  document.body.appendChild(textArea)

  textArea.value = text
  textArea.select()
  document.execCommand('copy')

  document.body.removeChild(textArea)
}
