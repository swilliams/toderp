(function() {
  var TodoItem, TodoItems, TodoView, _ref,
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

  TodoView = (function(_super) {

    __extends(TodoView, _super);

    function TodoView() {
      return TodoView.__super__.constructor.apply(this, arguments);
    }

    TodoView.prototype.tagName = 'li';

    TodoView.prototype.className = 'row';

    TodoView.prototype.templateId = '#row-template';

    TodoView.prototype.createTemplate = function() {
      var _ref;
      this.template = (_ref = this.template) != null ? _ref : Handlebars.compile($(this.templateId).html());
      return this.template;
    };

    TodoView.prototype.render = function() {
      var tmpl;
      tmpl = this.createTemplate();
      this.$el.html(tmpl(this.model.toJSON()));
      return this;
    };

    return TodoView;

  })(Backbone.View);

  this.derp = (_ref = window.derp) != null ? _ref : {};

  this.derp.TodoItem = TodoItem;

  this.derp.TodoItems = TodoItems;

  this.derp.TodoView = TodoView;

}).call(this);
