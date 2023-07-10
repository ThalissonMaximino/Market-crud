
# Market-crud

A basic crud for a market that sells cleaning and food products.
This API should be able to create, read, update and delete products from its native database.

This project was made for study proposals, Creating it I could understand the basics of HTTP requests utilizing nodejs/express and typescript. I also used middlewares to validate the products ID's. 

If you have any questions or opinions about this repository feel free to contact me :) 






## Run Locally

Clone the project

```bash
  git clone https://github.com/ThalissonMaximino/Market-crud.git
```

Go to the project directory

```bash
  cd Market-crud
```
Install dependencies

```bash
  npm install
```



## Running Tests

Since this is a study repository, for run tests you need to create a workspace on insomnia or postman and test the routes.
```
POST /products  =
Create and add the products to the market

SAMPLE BODY REQUEST =>

[
  {
    "name": "Cheese",
    "price": 10,
    "weight": 30,
    "calories": 300,
    "section": "food"
  },
  {
    "name": "Ham",
    "price": 100,
    "weight": 40,
    "calories": 1100,
    "section": "food"
  },
  {
    "name": "broom",
    "price": 10,
    "weight": 1000,
    "section": "cleaning"
  }
]

SHOULD RETURN =>

{
 "total": 120,
 "marketProducts": [
  {
   "id": 1,
   "name": "Queijo",
   "price": 10,
   "weight": 30,
   "calories": 300,
   "section": "food",
   "expirationDate": "2024-03-06T12:12:32.431Z"
  },
  {
   "id": 2,
   "name": "Presunto",
   "price": 100,
   "weight": 40,
   "calories": 1100,
   "section": "food",
   "expirationDate": "2024-03-06T12:12:32.431Z"
  }
  {
   "id": 3,
   "name": "Detergente",
   "price": 10,
   "weight": 1000,
   "section": "cleaning",
   "expirationDate": "2024-03-06T12:12:32.431Z"
  }
 ]
}

Status code:  201 CREATED.
```
```
GET /products =
List all products on the market

RETURN EXAMPLE => 
{
 "total": 120,
 "marketProducts": [
  {
   "id": 1,
   "name": "Cheese",
   "price": 10,
   "weight": 30,
   "calories": 300,
   "section": "food",
   "expirationDate": "2024-03-06T12:12:32.431Z"
  },
  {
   "id": 2,
   "name": "Ham",
   "price": 100,
   "weight": 40,
   "calories": 1100,
   "section": "food",
   "expirationDate": "2024-03-06T12:12:32.431Z"
  }
  {
   "id": 3,
   "name": "Broom",
   "price": 10,
   "weight": 1000,
   "section": "cleaning",
   "expirationDate": "2024-03-06T12:12:32.431Z"
  }
 ]
}
Status code: 200 OK;
```
```
GET /products/:id =
List a specific product by its id

RETURN EXAMPLE => 

{
  "id": 1,
  "name": "Cheese",
  "price": 10,
  "weight": 30,
  "calories": 300,
  "section": "food",
  "expirationDate": "2024-03-06T12:12:32.431Z"
}

Status code:  200 OK.

IF ID DOESNT EXIST => 
{
  "error": "Product not found"
}

Status code:  404 NOT FOUND.
```
```
PATCH /products/:id =
Update a product's data using its id

EXAMPLE BODY REQUEST =>
{
  "name": "smoked ham",
  "price": 100,
  "weight": 30,
  "calories": 300
}
EXAMPLE RETURN => 
{
  "id": 2,
  "name": "Presunto defumado",
  "price": 100,
  "weight": 30,
  "calories": 300,
  "section": "food",
  "expirationDate": "2024-03-06T12:12:32.431Z"
}
Status code:  200 OK.

IF ID DOESNT EXIST => 

{
  "error": "Product not found"
}
Status code:  404 NOT FOUND.
```

```
DELETE /products/:id =
Delete the product from its id

RETURNS ONLY A STATUS code =>

Status code:  204 NO CONTENT.
```



