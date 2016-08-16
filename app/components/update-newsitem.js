import Ember from 'ember';

export default Ember.Component.extend({
  updateNewsItemForm: false,

  actions: {
    newsItemForm() {
      this.set('updateNewsItemForm', true);

    },
    update(newsitem) {
      var params = {
        headline: this.get('headline'),
        shortheadline: this.get('shortheadline'),
        author: this.get('author'),
        category: this.get('category'),
        timestamp: this.get('timestamp'),
        image: this.get('image'),
        story: this.get('story')
      };
        this.set('updateNewsItemForm', false);
        this.sendAction('update', newsitem, params);
    }
  }
});
