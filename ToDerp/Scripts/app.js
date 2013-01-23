(function() {
  var TodoItem, TodoItems, _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  TodoItem = (function(_super) {

    __extends(TodoItem, _super);

    function TodoItem() {
      return TodoItem.__super__.constructor.apply(this, arguments);
    }

    TodoItem.prototype.urlRoot = '/api/Todo/Item';

    TodoItem.prototype.idAttribute = 'TodoItemId';

    return TodoItem;

  })(Backbone.Model);

  TodoItems = (function(_super) {

    __extends(TodoItems, _super);

    function TodoItems() {
      return TodoItems.__super__.constructor.apply(this, arguments);
    }

    TodoItems.prototype.model = TodoItem;

    TodoItems.prototype.url = '/api/Todo';

    TodoItems.prototype.inProgress = function() {
      return this.where({
        Completed: false
      });
    };

    TodoItems.prototype.completed = function() {
      return this.where({
        Completed: true
      });
    };

    return TodoItems;

  })(Backbone.Collection);

  this.derp = (_ref = window.derp) != null ? _ref : {};

  this.derp.TodoItem = TodoItem;

  this.derp.TodoItems = TodoItems;

}).call(this);
