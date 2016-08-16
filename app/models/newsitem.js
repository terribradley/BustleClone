import DS from 'ember-data';

export default DS.Model.extend({
  "headline": DS.attr(),
  "shortheadline": DS.attr(),
  "author": DS.attr(),
  "category": DS.attr(),
  "image": DS.attr(),
  "timestamp": DS.attr(),
  "story": DS.attr()
});
