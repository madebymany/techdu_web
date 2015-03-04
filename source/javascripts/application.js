"use strict";

var $ = require('jquery');
var BigBird = require('bigbird');

// BigBird Initializer
var initializer = new BigBird.Initializer({
  modules: {
    common: {
      initialize: function initializeAction() {
        // Any JS will fire on every page (after DOM loaded)
        console.log(BigBird.VERSION);
        console.log($.fn.jquery);
      }
    },
    root: {
      index: function() {
        // Only fire on index.html.erb
        console.log('index');
      },
      events: function() {
        // Only fire on events.html.erb
        console.log('events');
      },
      contact: function() {
        // Only fire on contact.html.erb
        console.log('contact');
      }
    }

  }
});

