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



@derp = window.derp ? {}
@derp.TodoItem = TodoItem
@derp.TodoItems = TodoItems
