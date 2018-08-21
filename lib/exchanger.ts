var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

const apiKey = '8e0f805d5da74a03bd07414ef849cd6c';

export const parseRate = (to, response) => {
    var regex = new RegExp(`\"${to}\":\\s+(\\d+\\.\\d+)`);
    var match = response.match(regex);

    if (isNaN(+match[1])) {
        return null
    }
    return +match[1]
}

export const exchange = (from, to, value) => {
    
    const request = new XMLHttpRequest();
    request.open( "GET", `http://openexchangerates.org/api/latest.json?app_id=${apiKey}`, false );
    request.send( null );

    return parseRate(to, request.responseText) * value
}