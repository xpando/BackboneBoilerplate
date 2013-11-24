define([
  'marionette',
  'layout',
], function (Marionette, Layout) {

  var app = new Marionette.Application();

  app.on("initialize:after", function (options) {
    if (Backbone.history) {
      Backbone.history.start();
    }
  });

  return app;
});