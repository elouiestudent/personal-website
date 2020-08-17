export default function toHTML(text, parameters, breaknum) {
    var breakstr = '<br>'.repeat(breaknum);
    var totalstr = '';
    if (text.length > 0) {
        for (var i = 0; i < text.length; i++) {
            var str = text[i];
            if (parameters.bold !== undefined) {
                parameters.bold.forEach(phrase => {
                    str = str.replace(phrase, '<b>' + phrase + '</b>');
                });
            }
            if (parameters.links !== undefined) {
                for (const [key, value] of Object.entries(parameters.links)) {
                    str = str.replace(key, '<a href="' + value + '" target="_blank" rel="noopener noreferrer">' + key + '</a>');
                }
            }
            if (i > 0)
                totalstr += breakstr + str;
            else
                totalstr += str;
        }
    }
    return totalstr;
}