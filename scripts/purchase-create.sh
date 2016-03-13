#!/bin/bash

curl --include --request POST http://localhost:3000/purchases \
  --header "Authorization: Token token=0TgcGh0Ze3JDDO6+4FhTVw==" \
  --header "Content-Type: application/json" \
  --data '{
    "purchase": {
      "items": "Some shit, another thing, something else"
    }
  }'
