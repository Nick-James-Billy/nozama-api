#!/bin/bash

curl --silent --request POST http://localhost:3000/charge \
  --header "Content-Type: application/json" \
  --data '{
   "amount": "9900",
   "currency": "usd",
   "source": "tok_17pS5t2eZvKYlo2CRodR6lgL"
}'
