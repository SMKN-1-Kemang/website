const elasticlunr = require("elasticlunr");

module.exports = function(collection) {
  const index = elasticlunr(function() {
    this.addField("title");
    this.addField("author");
    this.addField("date");
    this.setRef("id");
  });

  collection.forEach(news => {
    index.addDoc({
      id: news.url,
      title: news.data.title,
      author: news.data.author,
      date: news.data.date
    });
  });

  return index.toJSON();
};
