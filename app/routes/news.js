import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('newsitem', params.newsitem_id);
  },
});
