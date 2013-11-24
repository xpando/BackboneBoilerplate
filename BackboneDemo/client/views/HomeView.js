define([
  'marionette',
  'text!views/templates/home.html'
], function (Marionette, template) {

  return new Marionette.ItemView({
    template: template
  });

});