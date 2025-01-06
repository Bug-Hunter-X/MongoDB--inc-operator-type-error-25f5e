```javascript
//Correct usage of $inc operator
db.collection('myCollection').updateOne({"_id":ObjectId("6500d65e656756789000")},{$inc:{field1:1,field2:5}});
```