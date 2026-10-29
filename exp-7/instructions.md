Copy everything below and save it as `instructions.md`.

````
# MongoDB Installation, Setup, Collections and Documents

## 1. Check MongoDB Installation

```bash
mongod --version
mongosh --version
````

## 2. Start MongoDB Service (Windows)

```
net start MongoDB
```

## 3. Open MongoDB Shell

```
mongosh
```

## 4. Create or Select Database

```
use online_store
```

## 5. Create the Products Collection

```
db.createCollection("products")
```

## 6. Check Collections

```
show collections
```

## 7. Insert Documents into Products Collection

### Insert First Product

```
db.products.insertOne({
  name: "Laptop",
  price: 55000,
  category: "Electronics",
  stock: 10
})
```

### Insert Multiple Products

```
db.products.insertMany([
  {
    name: "Mobile",
    price: 25000,
    category: "Electronics",
    stock: 20
  },
  {
    name: "Headphones",
    price: 2000,
    category: "Accessories",
    stock: 30
  }
])
```

## 8. Display Product Documents

```
db.products.find()
```

### Display in Readable Format

```
db.products.find().pretty()
```

## 9. Create the Customers Collection

```
db.createCollection("customers")
```

## 10. Check Collections

```
show collections
```

## 11. Insert Customer Documents

### Insert First Customer

```
db.customers.insertOne({
  name: "Anugrah",
  email: "anugrah@example.com",
  city: "Mumbai"
})
```

### Insert Multiple Customers

```
db.customers.insertMany([
  {
    name: "Rahul",
    email: "rahul@example.com",
    city: "Pune"
  },
  {
    name: "Priya",
    email: "priya@example.com",
    city: "Nashik"
  }
])
```

## 12. Display Customer Documents

```
db.customers.find()
```

## 13. Verify the Database

### Display All Databases

```
show dbs
```

### Check the Current Database

```
db
```

### Display All Collections

```
show collections
```

## 14. Conclusion

The MongoDB database `online_store` was created successfully. The `products` and `customers` collections were created, and documents were inserted and displayed using MongoDB Shell.

```
```