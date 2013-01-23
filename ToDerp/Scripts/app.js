(function() {
  var BaseView, Controller, FormView, TodoItem, TodoItems, TodoView, _ref,
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

    return TodoItems;

  })(Backbone.Collection);

  BaseView = (function(_super) {

    __extends(BaseView, _super);

    function BaseView() {
      return BaseView.__super__.constructor.apply(this, arguments);
    }

    BaseView.prototype.parseForm = function() {
      var inputs, parseFn,
        _this = this;
      inputs = this.$('input');
      parseFn = function(obj, input) {
        var inputName;
        input = $(input);
        inputName = input.attr('name');
        obj[inputName] = input.is('[type=checkbox]') ? input.is(':checked') : input.val();
        return obj;
      };
      return _.reduce(inputs, parseFn, {});
    };

    BaseView.prototype.createTemplate = function() {
      var _ref;
      this.template = (_ref = this.template) != null ? _ref : Handlebars.compile($(this.templateId).html());
      return this.template;
    };

    BaseView.prototype.render = function() {
      var tmpl;
      tmpl = this.createTemplate();
      this.$el.html(tmpl(this.model.toJSON()));
      return this;
    };

    return BaseView;

  })(Backbone.View);

  FormView = (function(_super) {

    __extends(FormView, _super);

    function FormView() {
      return FormView.__super__.constructor.apply(this, arguments);
    }

    FormView.prototype.el = '#create';

    FormView.prototype.initialize = function() {
      return this.reset();
    };

    FormView.prototype.events = {
      'submit': 'formSubmitted'
    };

    FormView.prototype.reset = function() {
      this.$('[name=TaskName]').val('');
      return this.model = new TodoItem;
    };

    FormView.prototype.formSubmitted = function(ev) {
      ev.preventDefault();
      this.model.save(this.parseForm());
      this.trigger('TodoItem:Created', this.model);
      return this.reset();
    };

    return FormView;

  })(BaseView);

  TodoView = (function(_super) {

    __extends(TodoView, _super);

    function TodoView() {
      return TodoView.__super__.constructor.apply(this, arguments);
    }

    TodoView.prototype.tagName = 'li';

    TodoView.prototype.className = 'row';

    TodoView.prototype.templateId = '#row-template';

    TodoView.prototype.initialize = function() {
      return this.model.on('change:Completed', this.remove, this);
    };

    TodoView.prototype.events = {
      'change input[type=checkbox]': 'checkChanged'
    };

    TodoView.prototype.checkChanged = function() {
      var formValues;
      formValues = this.parseForm();
      return this.model.save(formValues);
    };

    return TodoView;

  })(BaseView);

  Controller = (function() {

    function Controller() {}

    Controller.prototype.inProgressId = '#inprogress';

    Controller.prototype.completeId = '#completed';

    Controller.prototype.index = function() {
      var coll, formView;
      coll = new TodoItems;
      coll.on('reset', this._renderItems, this);
      formView = new FormView;
      formView.on('TodoItem:Created', this._renderItem, this);
      return coll.fetch();
    };

    Controller.prototype._renderItem = function(item) {
      var inList, view;
      view = new TodoView({
        model: item
      });
      inList = item.get('Completed') ? this.completeId : this.inProgressId;
      $(inList).append(view.render().el);
      return item.once('sync', this._renderItem, this);
    };

    Controller.prototype._renderItems = function(coll) {
      var item, _i, _len, _ref, _results;
      _ref = coll.models;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        item = _ref[_i];
        _results.push(this._renderItem(item));
      }
      return _results;
    };

    return Controller;

  })();

  jQuery(function() {
    var c;
    c = new Controller;
    return c.index();
  });

  this.derp = (_ref = window.derp) != null ? _ref : {};

  this.derp.TodoItem = TodoItem;

  this.derp.TodoItems = TodoItems;

}).call(this);
