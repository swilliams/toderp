parseSerializedDate = (text) ->
	new Date(parseInt(text.substr(6)))
	
	
Handlebars.registerHelper('prettydate', (text) ->
	return '' if text is undefined
	return '' unless text?
	d = parseSerializedDate(text)
	hours = d.getHours()
	if hours > 12 then hours -= 12
	"#{hours}:#{d.getMinutes()}  #{d.getMonth() + 1}/#{d.getDate()}/#{d.getFullYear()}"
	)
