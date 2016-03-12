curl --silent --request POST http://localhost:3000/items \
  --header "Authorization: Token token=NkZzbdRPeVJLFnww1E6KOQ==" \
  --header "Content-Type: application/json" \
  --data '{
    "item": {
      "name": "Another TV",
      "price": "6.67",
      "description": "Only for watching House of Cards",
      "imageLocation": "https://s3.amazonaws.com/jamrs-bucket/2016-03-11/e63b336f53d655e3aee23b2a5aacb20a.jpg"
    }
  }'

curl --silent --request POST http://localhost:3000/items \
  --header "Authorization: Token token=NkZzbdRPeVJLFnww1E6KOQ==" \
  --header "Content-Type: application/json" \
  --data '{
    "item": {
      "name": "St. Kitts Citizenship",
      "price": "250000",
      "description": "Great for exiled Russian oligarchs!",
      "imageLocation": "https://s3.amazonaws.com/jamrs-bucket/2016-03-11/e63b336f53d655e3aee23b2a5aacb20a.jpg"
    }
  }'

curl --silent --request POST http://localhost:3000/items \
  --header "Authorization: Token token=NkZzbdRPeVJLFnww1E6KOQ==" \
  --header "Content-Type: application/json" \
  --data '{
    "item": {
      "name": "Dinner with John Goodman",
      "price": "40",
      "description": "A really good guy",
      "imageLocation": "https://s3.amazonaws.com/jamrs-bucket/2016-03-11/e63b336f53d655e3aee23b2a5aacb20a.jpg"
    }
  }'
