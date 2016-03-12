#!/bin/bash

curl --include --request PATCH http://localhost:3000/purchases/56e498ffc97ffef8034aeea4 \
  --header "Authorization: Token token=0TgcGh0Ze3JDDO6+4FhTVw==" \
  --header "Content-Type: application/json" \
  --data '{
    "purchase": {
      "items": "somemoreshit"
    }
  }'
