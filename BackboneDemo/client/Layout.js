define([
  'require',
  'backbone',
  'marionette',
], function (Require, Backbone, Marionette) {

  var layout = new Marionette.Layout({ el: 'body' });

  layout.addRegion('content', '#content');

  var router = new Backbone.Router({
    routes: {
      '*view': function (view) {
        if (!view) view = 'Home';
        var viewPath = 'views/' + view + 'View';
        console.log('Route ' + view + ' to ' + viewPath);
        Require([viewPath], function (view) {
          layout.content.show(view);
        });
      }
    },
  });

  return layout;
});