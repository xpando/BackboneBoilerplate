define([
  'jquery',
  'app',
  'router',
  'shell'
], function ($, App, Router, Shell) {
  'use strict';

  $(function () {
    // stick the app object on the window
    // object for easy access form the debugger
    window.App = App;

    App.Router = Router;
    App.Shell = Shell;
    App.start();
  })

});