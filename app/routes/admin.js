import Ember from 'ember';

export default Ember.Route.extend({
  model() {
     return this.store.findAll('newsitem');
  },
  actions: {
    save3(params) {
      var newNewsItem = this.store.createRecord('newsitem', params);
      newNewsItem.save();
      this.transitionTo('admin');
    },

    destroyNewsItem(newsitem) {
      newsitem.destroyRecord();
      this.transitionTo('admin');
    }
  }
});
