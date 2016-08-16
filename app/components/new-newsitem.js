import Ember from 'ember';

export default Ember.Component.extend({
  addNewNewsItem: false,
  actions: {
    newsItemForm() {
      this.set('addNewNewsItem', true);
    },
    save1() {
      var params = {
        headline: this.get('headline'),
        shortheadline: this.get('shortheadline'),
        author: this.get('author'),
        category: this.get('category'),
        timestamp: this.get('timestamp'),
        image: this.get('image'),
        story: this.get('story')
      };
      this.set('addNewNewsItem', false);
      this.sendAction('save2', params);
    }
  }
});
