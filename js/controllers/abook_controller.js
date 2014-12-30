Abook.AbookController = Ember.ArrayController.extend({
	actions: {
		createContact: function() {
			var name = this.get('newName'),
			    email = this.get('newEmail'),
			    phone = this.get('newPhone'),
			    contact;

			if(!name || !name.trim() 
				 || !email || !email.trim() 
				 || !phone || !phone.trim()) {
				return;
			}    

			// Create new Contact model
			contact = this.store.createRecord('contact', {
				name: name,
				phone: phone,
				email: email
			});

			// Clear all the form fields
			this.set('newName', '');
			this.set('newEmail', '');
			this.set('newPhone', '');

			// Save the new model
      contact.save();

		}
	}


})