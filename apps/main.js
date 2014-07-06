include('apps.routers.router');

Backbone.history.start();

new MtsApp.Routers.Router;

Backbone.history.loadUrl();