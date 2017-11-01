const electron = require('electron')
const testView = require('../views/testView')
const app = electron.app

module.exports = {
// Funcions per a gestionar els menus

testOpenWebView: function () {
    console.log('testOpenWebView')
    tv = new testView('Test View')
    tv.create
  }

}