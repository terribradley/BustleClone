import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    save3(params) {
      var newNewsItem = this.store.createRecord('newsitem', params);
      newNewsItem.save();
      this.transitionTo('admin');
    }
  }
});
