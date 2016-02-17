chrome.browserAction.onClicked.addListener(function(){
  chrome.tabs.executeScript(null, { file: 'bower_components/jquery/dist/jquery.min.js' }, function() {
    chrome.tabs.executeScript(null, { file: 'bower_components/jqnotifybar/jquery.notifyBar.js' }, function() {
      chrome.tabs.executeScript(null, { code: 'var bc_type = "' + localStorage.bc_type + '"' }, function() {
        chrome.tabs.executeScript(null, {file: 'main.js'})
      })
    })
  })
})
