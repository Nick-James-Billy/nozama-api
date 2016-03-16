#!/bin/bash

curl --silent --request GET http://localhost:3000/search \
--header "Authorization: Token token=Sznaz2TmPY2oxiBK+lwYOA==" \
--header "Content-Type: application/json" \
--data '{
  "name": "Leonardo"
}'
