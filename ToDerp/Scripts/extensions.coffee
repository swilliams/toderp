parseSerializedDate = (text) ->
	new Date(parseInt(text.substr(6)))
	
	
Handlebars.registerHelper('prettydate', (text) ->
	return '' if text is undefined
	return '' unless text?
	d = parseSerializedDate(text)
	hours = d.getHours() + 1
	ampm = "AM"
	if hours > 12  
		hours -= 12
		ampm = "PM"
	months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
	"#{hours}:#{d.getMinutes()} #{ampm}  #{months[d.getMonth()]} #{d.getDate()}, #{d.getFullYear()}"
	)
