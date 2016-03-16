# Overview

This API is the backend for the Nozama Project by Nick Wilcox, Billy Yau, and
James Friedman, General Assembly Boston WDI-10. It allows a frontend ecommerce
app to store, manipulate, and update user data, items, and purchase history.
All of the items available for purchase are dinners with various celebrities.

##Technologies used

This app is built with Express on Node.js, MongoDB and Mongoose for data storage
and the Stripe Node package for processing credit card transactions.
(Note: Stripe is used in test mode and cannot actually process transactions)

##Actions

User Actions:
POST '/sign-up' => creates a new user
POST '/sign-in' => signs in a new user, returns a token
DELETE '/sign-out/:id' => sign out the current user
PATCH '/change-password/:id' => changes the password associated with a User

Item Actions:
POST /items => creates a new item
GET /items => returns all items
GET /items/:id => returns a single item
PATCH /items/:id => updates an item
DELETE /items/:id => destroys an item

Purchase Actions:
POST /purchases => creates a new purchase
GET /purchases => returns all purchases associated with current user
GET /purchases/:id => returns a single purchase if it is associated with the
                      current user
PATCH /purchases/:id => updates a purchase associated with the user
DELETE /purchases/:id => destroys a purchase associated with user
GET /purchaseHistory => returns all purchase associated with user for which
                        completed is true
GET /currentCart => returns the user's current cart, i.e. the purchase
                    associated with the user for which completed is false
POST /charge => send a card charge to the Stripe API to be processed, and if
                successful, returns a Stripe charge object

##Database Models

See Models [here](https://drive.google.com/file/d/0B7bwsjwFCuRgcWtvZ0hPcGRpNm83d1E0dWdRTGRXN0JYZndn/view?usp=sharing)
