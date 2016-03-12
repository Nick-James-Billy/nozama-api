#!/bin/bash

curl --silent --request PATCH http://localhost:3000/items/56e468f856981db80e6f75a4 \
  --header "Authorization: Token token=gE6KOh4S0j39GHmkpJFzuQ==" \
  --header "Content-Type: application/json" \
  --data '{
    "item": {
      "name": "St. Kitts & Nevis Citizenship",
      "price": "400000",
      "description": "Now with HALF the taxes!",
      "imageLocation": "https://s3.amazonaws.com/jamrs-bucket/2016-03-11/e63b336f53d655e3aee23b2a5aacb20a.jpg"
    }
  }'
