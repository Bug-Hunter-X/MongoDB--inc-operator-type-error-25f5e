# MongoDB $inc operator type error
This example demonstrates an uncommon error when using the MongoDB $inc operator. The $inc operator is used to increment a numeric field by a specified value. However, if you try to increment a field with a non-numeric value, MongoDB will throw a type error.  

**Bug:** Incorrect usage of $inc operator.  Attempting to increment a field with a non-numeric value results in a type error.

**Solution:** Ensure all fields being incremented with $inc have numeric values.