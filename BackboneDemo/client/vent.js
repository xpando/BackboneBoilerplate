// Global event aggregator that can be required
// by any other module without having to require
// the App object
define(['backbone.wreqr'], function (Wreqr) {
  return new Wreqr.EventAggregator();
})