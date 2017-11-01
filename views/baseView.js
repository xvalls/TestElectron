const electron = require('electron')

//module.exports = {
// Vista

module.exports =
class BaseView {
    //let sTitle = "default"

    constructor(title) {
        this.title = title;
        console.log('constructor : '+title)
    }

    // Public: Destroy and remove this panel from the UI.
    destroy () {
  /*      if (this.destroyed) return
        this.destroyed = true
        this.hide()
        if (this.element) this.element.remove()
        this.emitter.emit('did-destroy', this)
        return this.emitter.dispose()
        */
        console.log('Destroy view : '+title)
    }

    // Create the view
    create(){
        console.log('Create view with title: '+title)
    }
    
}

