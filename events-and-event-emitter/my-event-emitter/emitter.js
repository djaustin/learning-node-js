// Example version of how to construct an event emitter.

function Emitter(){
  this.events = {};
}

// Add event listeners to an array laballed with the name of the event type
Emitter.prototype.on = function (type, listener) {
  this.events[type] = this.events[type] || [];
  this.events[type].push(listener);
};

// if there is an array of functions relating to this event type, execute all of the functions sequentially
Emitter.prototype.emit = function (type) {
  if(this.events[type]){
    this.events[type].forEach(function(listener){
      listener();
    })
  }
};

module.exports = Emitter;
