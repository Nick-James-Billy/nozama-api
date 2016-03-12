<<<<<<< e089b9edd3f56ee3ec974db8ff41aea0f53b7142
#!/bin/bash
curl --silent --request POST http://localhost:3000/items \
  --header "Authorization: Token token=eeQc0346WXoXQrUhe4d+ag==" \
  --header "Content-Type: application/json" \
  --data '{
    "item": {
      "name": "A fancy new car!",
      "price": "32000",
      "description": "Brewster!",
=======
curl --silent --request POST http://localhost:3000/items \
  --header "Authorization: Token token=NkZzbdRPeVJLFnww1E6KOQ==" \
  --header "Content-Type: application/json" \
  --data '{
    "item": {
      "name": "Another TV",
      "price": "6.67",
      "description": "Only for watching House of Cards",
>>>>>>> Add resource routes for items and purchases
      "imageLocation": "https://s3.amazonaws.com/jamrs-bucket/2016-03-11/e63b336f53d655e3aee23b2a5aacb20a.jpg"
    }
  }'

<<<<<<< e089b9edd3f56ee3ec974db8ff41aea0f53b7142
# curl --silent --request POST http://localhost:3000/items \
#   --header "Authorization: Token token=+vxbKtumipaRfPXCAalNXg==" \
#   --header "Content-Type: application/json" \
#   --data '{
#     "item": {
#       "name": "St. Kitts Citizenship",
#       "price": "250000",
#       "description": "Great for exiled Russian oligarchs!",
#       "imageLocation": "https://s3.amazonaws.com/jamrs-bucket/2016-03-11/e63b336f53d655e3aee23b2a5aacb20a.jpg"
#     }
#   }'
#
# curl --silent --request POST http://localhost:3000/items \
#   --header "Authorization: Token token=+vxbKtumipaRfPXCAalNXg==" \
#   --header "Content-Type: application/json" \
#   --data '{
#     "item": {
#       "name": "Dinner with John Goodman",
#       "price": "40",
#       "description": "A really good guy",
#       "imageLocation": "https://s3.amazonaws.com/jamrs-bucket/2016-03-11/e63b336f53d655e3aee23b2a5aacb20a.jpg"
#     }
#   }'
=======
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
>>>>>>> Add resource routes for items and purchases
