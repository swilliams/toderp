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

	initialize: ->
		@model.on 'change:Completed', @remove, @

	events:
		'change input[type=checkbox]' : 'checkChanged'

	createTemplate: ->
		@template = @template ? Handlebars.compile($(@templateId).html())
		@template

	render: ->
		tmpl = @createTemplate()
		@$el.html tmpl(@model.toJSON())
		@

	parseForm: ->
		inputs = @$('input')
		parseFn = (obj, input) =>
			input = $(input)
			inputName = input.attr('name')
			obj[inputName] = if input.is('[type=checkbox]') then input.is(':checked') else input.val()
			obj
		_.reduce inputs, parseFn, {}

	checkChanged: ->
		formValues = @parseForm()
		@model.save formValues


class Controller
	inProgressId: '#inprogress'
	completeId: '#completed'

	index: ->
		coll = new TodoItems
		coll.on 'reset', @_renderItems, @

		coll.fetch()

	_renderItem: (item) ->
		view = new TodoView model: item
		inList = if item.get('Completed') then @completeId else @inProgressId
		$(inList).append view.render().el
		item.once 'change:Completed', @_renderItem, @

	_renderItems: (coll) ->
		@_renderItem item for item in coll.models

jQuery ->
	c = new Controller
	c.index()
	

@derp = window.derp ? {}
@derp.TodoItem = TodoItem
@derp.TodoItems = TodoItems
@derp.TodoView = TodoView