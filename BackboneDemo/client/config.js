requirejs.config({
  paths: {
    // core libs
    'tpl': 'libs/tpl.min',
    'jquery': 'libs/jquery.min',
    'bootstrap': 'libs/bootstrap.min',
    'underscore': 'libs/underscore.min',
    'backbone': 'libs/backbone.min',
    'backbone.babysitter': 'libs/backbone.babysitter.min',
    'backbone.wreqr': 'libs/backbone.wreqr.min',
    'marionette': 'libs/backbone.marionette.min',
  },
  shim: {
    'underscore': {
      exports: '_'
    },
    'backbone': {
      deps: ['jquery', 'underscore'],
      exports: 'Backbone'
    },
    'bootstrap': {
      deps: ['jquery'],
      exports: 'jQuery'
    }
  }
});

require(['main']);