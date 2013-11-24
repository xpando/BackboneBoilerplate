// Shell layout module that includes 
// navigation via a convention based
// view locator
define([
  'jquery',
  'require',
  'marionette',
  'vent',
], function ($, require, Marionette, vent) {

  var layout = new Marionette.Layout({ el: '#shell' });

  layout.addRegion('content', '#content')

  // on navigation events, load the
  // specified view and add to the
  // content region
  var lastId;
  vent.on('nav:content', function (id) {
    // default id
    if (!id) id = 'home';

    // remove active class from current tab
    if (lastId)
      layout.$el.find('#nav a[href=#' + lastId + ']').parent('li').removeClass('active');

    var viewPath = 'views/' + id;
    require([viewPath], function (view) {
      // add active class to newly selected tab
      lastId = id;
      layout.$el.find('#nav a[href=#' + id + ']').parent('li').addClass('active');

      layout.content.show(view);
    });
  });

  return layout;
});