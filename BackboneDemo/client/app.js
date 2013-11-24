﻿define([
  'backbone',
  'marionette'
], function (Backbone, Marionette) {

  var app = new Marionette.Application();
  
  app.on("initialize:after", function (options) {
    if (Backbone.history) {
      Backbone.history.start();
    }
  });

  return app;
});