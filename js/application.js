window.Abook = Ember.Application.create();

Abook.ApplicationAdapter = DS.LSAdapter.extend({
  namespace: 'abook-emberjs'
});

Abook.AbookView = Ember.View.extend({
	didInsertElement: function() {
		$('.phone-no').mask('(000) 000-0000');
	}
});
