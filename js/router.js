Abook.Router.map(function() {
  this.resource('abook', { path: '/' });
});

Abook.AbookRoute = Ember.Route.extend({
	model: function() {
		return this.store.find('contact');
	}
})