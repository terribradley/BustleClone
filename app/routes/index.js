import Ember from 'ember';

  var newsitems = [{
      "headline": "When Is Katy Perry Footwear Coming Out? Here's When To Expect This Shoe Line",
      "shortheadline": "Here's When To Expect Katy Perry Footwear",
      "author": "Kali Borovic",
      "category": "Fashion & Beauty",
      "image": "img/katy.jpg",
      "timestamp": "an hour ago",
      "story": "She's already done music, makeup, and perfume, but now she's coming back for more. In case you missed it, Katy Perry is coming out with her own shoe line in partnership with Global Brands Group, according to Women's Wear Daily. There will be lots of different options at a pretty accessible price point. When does Katy Perry Footwear launch? You've got some time to wait, but I'm willing to bet that it will be completely worth it."
  }, {
    "headline": "Justin Bieber Deletes His Instagram & Fans Are Heartbroken",
    "shortheadline": "Justin Bieber's Instagram Is Actually Gone",
    "author": "Nicole Pomarico",
    "category": "Entertainment",
    "image": "img/beiber.jpg",
    "timestamp": "3 hours ago",
    "story": "If you woke up Tuesday morning, opened Twitter, and saw everyone tweeting #JustinDeactivatedParty, yes, that means exactly what you think it means: Justin Bieber has deleted his Instagram. On Sunday, the 'Cold Water' singer threatened to go private if fans didn't stop hating on his alleged girlfriend, Sofia Richie, and it seems like he's decided to take it a step further. Bustle has reached out to Bieber and Richie's reps regarding the dating rumors, but has not yet received a response."
  }, {
    "headline":"This Photo Of Katie Ledecky Signing Michael Phelps' Poster Perfectly Depicts Her Rise To Olympic Fame",
    "shortheadline": "Phelps & Ledecky Pose Together For A Throwback",
    "author": "Noor Al-Sibai",
    "category": "News",
    "image": "img/phelps.jpg",
    "timestamp": "9 hours ago",
    "story": "Since the 2016 Rio Olympics began and Katie Ledecky became a household name for her five Olympic medals and three record-holding freestyle swims, more and more information about her star-studded past has made its way onto social media. From the time she met Michael Jordan as a toddler to the time she met Michael Phelps as a burgeoning swimmer in 2006, Ledecky's brushes with fame seem to have predicated her own. Perhaps that's why Phelps and Ledecky posed in a photo to remake their iconic 2006 autograph photo, showing the world that, as far as they're concerned, Ledecky is about to be the world's biggest swimming star."
  }, {
    "headline": "Olympian Allyson Felix Just Magnificently Became The Most Decorated American Woman In Her Sport",
    "shortheadline": "Allyson Felix's Win Set A Record For The USA",
    "author": "Seth Millstein",
    "category": "News",
    "image": "img/run.jpg",
    "timestamp": "11 hours ago",
    "story": "Olympic runner Allyson Felix didn’t win the gold medal in the 400-meter at this year’s games in Rio. She finished second, just a bit behind Shaunae Miller of the Bahamas. But she set an Olympic record nonetheless: With her silver in the 400-meter, Felix became the most decorated American woman in track and field, breaking the record of six medals previously held by Jackie Joyner-Kersee. Incidentally, Joyner-Kersee’s husband Bob is Felix’s running coach."
  }];

export default Ember.Route.extend({
  model() {
    return newsitems;
  }
});
