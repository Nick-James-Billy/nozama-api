#!/bin/bash

curl --include --request POST http://localhost:3000/purchases \
  --header "Authorization: Token token=zDA9E+npvWqD3IFFORykbw==" \
  --header "Content-Type: application/json" \
  --data '{
    "purchase": {
      "items": "SomeItems",
      "completed": "true"
    }
  }'
