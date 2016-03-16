#!/bin/bash

curl --silent --request POST http://localhost:3000/items \
  --header "Authorization: Token token=Sznaz2TmPY2oxiBK+lwYOA==" \
  --header "Content-Type: application/json" \
  --data '{
    "item": {
      "name": "Mel Gibson",
      "price": "40000",
      "description": "Revnant",
      "imageLocation": "https://s3.amazonaws.com/jamrs-bucket/2016-03-11/e63b336f53d655e3aee23b2a5aacb20a.jpg"
    }
}'
