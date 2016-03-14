#!/bin/bash

curl --include --request PATCH http://localhost:3000/purchases/56e5f9ce0f044d830673d026 \
  --header "Authorization: Token token=F4bRNqidbA0A27t1YRf/nA==" \
  --header "Content-Type: application/json" \
  --data '{
    "purchase": {
      "items": "somemoreshit",
      "completed": "true"
    }
  }'
