Abook.Contact = DS.Model.extend({
	name: DS.attr('string'),
	email: DS.attr('string'),
	phone: DS.attr('string')
})

/*
Abook.Contact.FIXTURES = [
	{
		id: 1,
		name: 'Sachin Tendulkar',
		email: 'sachin@yahoo.com',
		phone: '345-456-5566'
	},

	{
		id: 2,
		name: 'Virat Kohli',
		email: 'virat@yahoo.com',
		phone: '456-345-8877'
	},

	{
		id: 3,
		name: 'Yuvraj Singh',
		email: 'yuvraj@yahoo.com',
		phone: '234-876-4567'
	},

	{
		id: 4,
		name: 'Suresh Raina',
		email: 'suresh@yahoo.com',
		phone: '809-789-3452'
	},

	{
		id: 5,
		name: 'Ishant Sharma',
		email: 'ishant@yahoo.com',
		phone: '323-767-0987'
	},

	{
		id: 6,
		name: 'Sachin Rahane',
		email: 'sachinr@yahoo.com',
		phone: '234-456-5566'
	}
];
*/