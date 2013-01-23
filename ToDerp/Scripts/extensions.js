(function() {
  var parseSerializedDate;

  parseSerializedDate = function(text) {
    return new Date(parseInt(text.substr(6)));
  };

  Handlebars.registerHelper('prettydate', function(text) {
    var d, hours;
    if (text === void 0) {
      return '';
    }
    if (text == null) {
      return '';
    }
    d = parseSerializedDate(text);
    hours = d.getHours();
    if (hours > 12) {
      hours -= 12;
    }
    return "" + hours + ":" + (d.getMinutes()) + "  " + (d.getMonth() + 1) + "/" + (d.getDate()) + "/" + (d.getFullYear());
  });

}).call(this);
