//ローカルアプリの起動
var port = chrome.runtime.connectNative('chrome-ext-sample')

//ローカルアプリからメッセージ受信
port.onMessage.addListener((req) => {
  if (chrome.runtime.lastError) {
    console.log(chrome.runtime.lastError.message)
  }
  handleMessage(req)
})

//アプリから切断されたときの処理
port.onDisconnect.addListener(() => {
  if (chrome.runtime.lastError) {
    console.log(chrome.runtime.lastError.message)
  }
  console.log('Disconnected')
})

function handleMessage (req) {
  console.log("req.message : " + req.message);
  if (req.message === 'pong') {
    console.log(req)
  }
}

//ローカルアプリへメッセージ送信
port.postMessage({message: 'ping', body: 'hello from browser extension'})