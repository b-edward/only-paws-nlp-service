# OnlyPaws NLP Microservice

This repo contains a service for the OnlyPaws application. It will take a string representing a user's message, and use Cohere's Generate endpoint to get a suggested response using Natural Language Processing. The suggested response string will be returned to the caller in a JSON. 

## Usage:

1) Send a GET request to https://only-paws-nlp-service.herokuapp.com/response/YOUR_QUESTION_STRING
2) The API will return a JSON containing the response generated by Cohere's NLP.

### Main Project:

https://github.com/carlotacb/only-paws/
