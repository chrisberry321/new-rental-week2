import Ember from 'ember';

//model (now in rentals.json and imported into database)

//this is the same as writing model:function()
//method = hook
//accesses data model in firebase

export default Ember.Route.extend({
  model() {
    return this.store.findAll('rental');
  },

//info is passed up from index.hbs, here is where we actaully destroy the rental
// We use the params to create a new rental record in the store and then save it. We transition back to our index page and see our new rental in the list.
actions: {
  save3(params) {
    var newRental = this.store.createRecord('rental', params);
    newRental.save();
    this.transitionTo('index');
  },

//   update action = For each key in the params,
// if it is NOT undefined,
// take the rental and set the property that matches the current key, to the value of the current key,
// after looping through all of the keys, save the rental,
// transition to the index route.
  }
});
