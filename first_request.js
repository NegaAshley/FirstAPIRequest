//Print out html of Google
const request = require('request');
request('http://www.google.com', function (error, response, body){
    if(error){
        console.log("SOMETHING WENT WRONG!");
        console.log(error);
    }else{
        if(response.statusCode == 200){
            //THINGS WORKED!
            console.log(body);
        }
    }
});