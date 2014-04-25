var docpadConfig = {
  templateData: {
    site: {
      title: "Protractor Guide",
      url: "https://protractor-br.github.io/guide"
    }
  },
  collections: {
    pages: function() {
      return this.getCollection('html').findAllLive({isPage: true});
    }
  }
};

module.exports = docpadConfig;
