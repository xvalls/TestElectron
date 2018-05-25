const {Menu} = require('electron')
const electron = require('electron')
const handlers = require('./menuHandlers')
const app = electron.app

// Menu exemple
const menuTemplate = [
    {
      label: 'Test',
      submenu: [
        {label: 'Launch in IE',click (item, focusedWindow) { 
            require('electron').shell.openExternal('https://electron.atom.io', false) 
          }
        },
        {label: 'Open webView',click (item, focusedWindow) { 
            handlers.testOpenWebView() } }
      ]
    }
]

const menu = Menu.buildFromTemplate(menuTemplate)
Menu.setApplicationMenu(menu)