// Generic application router that simply
// raises navigation events
define([
  'marionette',
  'vent'
], function (Marionette, vent) {
  'use strict';

  var router = new Marionette.AppRouter({
    appRoutes: {
      '*id': 'navigate'
    },
    controller: {
      navigate: function (id) {
        vent.trigger('nav:content', id);
      }
    }
  });

  return router;
});