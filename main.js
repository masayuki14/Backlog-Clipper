var key = $('div#issuecard div.key strong').text()

var title = $('div#issuecard h4.summary').text()
var spChars = { '[': '(', ']': ')' };
var titleEscaped = title.replace(/[\[\]]/g, function(c) { return spChars[c] })

var url = window.location.href
var hashIndex = url.indexOf('#')
if (hashIndex != -1) url = url.substr(0, hashIndex)

var checked = ' ';
// StatusがResolved or Closed ならxにする
if ($('div.right_content div.issue-status-4-color').length
    || $('div.right_content div.issue-status-3-color').length) {
  checked = 'x';
}

var tag = ''

if (bc_type == 'todo') tag += '[' + checked + ']'
if (bc_type == 'list') tag += '- ' + '[' + checked + ']'

var text = tag + '[' + key + ' ' + titleEscaped + '](' + url + ')'

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

function saveToClipboard(text) {
  var textArea = document.createElement('textarea')
  textArea.style.cssText = 'position:absolute;left:-100%'

  document.body.appendChild(textArea)

  textArea.value = text
  textArea.select()
  document.execCommand('copy')

  document.body.removeChild(textArea)
}
