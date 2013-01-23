class TodoItem extends Backbone.Model
	urlRoot: '/api/Todo/Item'
	idAttribute: 'TodoItemId'

class TodoItems extends Backbone.Collection
	model: TodoItem
	url: '/api/Todo'

	inProgress: ->
		@where Completed: false

	completed: ->
		@where Completed: true

class TodoView extends Backbone.View
	tagName: 'li'
	className: 'row'
	templateId: '#row-template'

	createTemplate: ->
		@template = @template ? Handlebars.compile($(@templateId).html())
		@template

	render: ->
		tmpl = @createTemplate()
		@$el.html tmpl(@model.toJSON())
		@

@derp = window.derp ? {}
@derp.TodoItem = TodoItem
@derp.TodoItems = TodoItems
@derp.TodoView = TodoView