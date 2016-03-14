#!/bin/bash

curl --include --request POST http://localhost:3000/sign-up \
  --header "Content-Type: application/json" \
  --data '{
    "credentials": {
      "email": "nick@mail.com",
      "password": "n",
      "password_confirmation": "n"
    }
  }'

# curl --include --request POST http://localhost:3000/sign-up \
#   --header "Content-Type: application/json" \
#   --data '{
#     "credentials": {
#       "email": "ryan@mail.com",
#       "password": "r",
#       "password_confirmation": "r"
#     }
#   }'
