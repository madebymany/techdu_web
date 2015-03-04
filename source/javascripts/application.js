"use strict";

var $ = require('jquery');
var BigBird = require('bigbird');

// BigBird Initializer
var initializer = new BigBird.Initializer({
  modules: {
    common: {
      initialize: function initializeAction() {
        console.log(BigBird.VERSION);
        console.log($.fn.jquery);
      }
    }
  }
});

