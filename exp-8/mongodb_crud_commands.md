# MongoDB CRUD Operations

## 1. Select or Create a Database

```javascript
use college
```

## 2. Check the Current Database

```javascript
db
```

## 3. Create a Collection

```javascript
db.createCollection("students")
```

## 4. Create Operations

### Insert One Document

```javascript
db.students.insertOne({
  name: "Oreo",
  age: 20,
  branch: "IT",
  marks: 85
})
```

### Insert Multiple Documents

```javascript
db.students.insertMany([
  {
    name: "Cookie",
    age: 21,
    branch: "Computer",
    marks: 90
  },
  {
    name: "Maximus",
    age: 20,
    branch: "IT",
    marks: 78
  },
  {
    name: "Minnie",
    age: 22,
    branch: "ENTC",
    marks: 88
  }
])
```

## 5. Read Operations

### Display All Documents

```javascript
db.students.find()
```

### Display Documents in a Readable Format

```javascript
db.students.find().pretty()
```

### Find One Student

```javascript
db.students.findOne({ name: "Oreo" })
```

### Find Students from the IT Branch

```javascript
db.students.find({ branch: "IT" })
```

## 6. Update Operations

### Update Oreo's Marks

```javascript
db.students.updateOne(
  { name: "Oreo" },
  { $set: { marks: 92 } }
)
```

### Verify the Update

```javascript
db.students.findOne({ name: "Oreo" })
```

### Add a College Field to All IT Students

```javascript
db.students.updateMany(
  { branch: "IT" },
  { $set: { college: "VPPCOE" } }
)
```

## 7. Delete Operation

### Delete Maximus's Document

```javascript
db.students.deleteOne({ name: "Maximus" })
```

## 8. Verify the Final Documents

```javascript
db.students.find()
```
