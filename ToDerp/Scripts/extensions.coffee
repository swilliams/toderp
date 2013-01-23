parseSerializedDate = (text) ->
	new Date(parseInt(text.substr(6)))
	
	
Handlebars.registerHelper('prettydate', (text) ->
	return '' if text is undefined
	return '' unless text?
	d = parseSerializedDate(text) 
	"#{d.getMonth() + 1}/#{d.getDate()}/#{d.getFullYear()}"
	)
