(function() {
  var parseSerializedDate;

  parseSerializedDate = function(text) {
    return new Date(parseInt(text.substr(6)));
  };

  Handlebars.registerHelper('prettydate', function(text) {
    var ampm, d, hours, months;
    if (text === void 0) {
      return '';
    }
    if (text == null) {
      return '';
    }
    d = parseSerializedDate(text);
    hours = d.getHours() + 1;
    ampm = "AM";
    if (hours > 12) {
      hours -= 12;
      ampm = "PM";
    }
    months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    return "" + hours + ":" + (d.getMinutes()) + " " + ampm + "  " + months[d.getMonth()] + " " + (d.getDate()) + ", " + (d.getFullYear());
  });

}).call(this);
