// Import and use libraries
const express = require('express'),
bodyParser = require('body-parser');
app = express(); app.use(bodyParser.json());

// The end point for the request.
app.post(`/myEnd`, async function(request, response) {
    // Log the request body. Use it to send different responses.
    console.log(request.body)
    // Reply to the event with a response array and the secret.
    // You can have up to 5 responses per event in the array.
    // If you response with info instae of response, we will send sender effects.
    response.send({token: "ddd", response:[
        {
            "response":{"file":"./audio/blank.mp3"}
        }, {
            "response" : { "text":"This is a test audio file!"}
        }, {
          "response" : {"text": "Hi {{user_first_name}}, can you tell me when did you buy this product?", "quick_replies": [
              {
                "content_type":"text",
                "title":"Less than 7 days",
                "payload":"DEMO"
              }, {
                "content_type":"text",
                "title":"More than 7 days",
                "payload":"DEMO"
              }
            ]}
        }
    ]  
  });
});

// listen for webhook events //
app.listen(process.env.PORT || 3370, () => console.log('webhook is listening'));