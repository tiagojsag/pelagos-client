define(["app/Class", "app/Data/Format", "app/Data/BaseTiledFormat", "app/Data/EmptyFormat"], function(Class, Format, BaseTiledFormat, EmptyFormat) {
  var TiledEmptyFormat = Class(BaseTiledFormat, {
    name: "TiledEmptyFormat",

    headerTime: 1000,
    contentTime: 1000,

    load: function () {
      var self = this;
      if (self.error) {
        /* Rethrow error, to not confuse code that expects either an
         * error or a load event... */
        self.events.triggerEvent("error", self.error);
        return;
      }
      self.events.triggerEvent("load");

      self.tilesetHeader = {length: 0, colsByName: {}};
      self.events.triggerEvent("header", self.tilesetHeader);
    },

    getTileContent: function (tile) {
      var self = this;
      return new EmptyFormat({
        url:self.url + "/" + tile.bounds.toString(),
        headerTime: self.headerTime,
        contentTime: self.contentTime
      });
    },

    toJSON: function () {
      return {
        "type": self.name,
        args: {
          url: self.url
        }
      }
    }
  });
  Format.formatClasses.TiledEmptyFormat = TiledEmptyFormat;

  return TiledEmptyFormat;
});
