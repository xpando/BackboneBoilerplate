define([
  'marionette',
  'tpl!views/templates/about.html'
], function (Marionette, template) {

  return new Marionette.ItemView({
    template: template
  });

});