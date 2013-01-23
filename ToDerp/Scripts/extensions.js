(function() {
  var parseSerializedDate;

  parseSerializedDate = function(text) {
    return new Date(parseInt(dateString.substr(6)));
  };

  Handlebars.registerHelper('prettydate', function(text) {
    var d;
    if (text === void 0) {
      return '';
    }
    if (text == null) {
      return '';
    }
    d = parseSerializedDate(text);
    return "" + (d.getMonth() + 1) + "/" + (d.getDate()) + "/" + (d.getFullYear());
  });

}).call(this);
