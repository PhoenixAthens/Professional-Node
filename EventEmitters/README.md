Q1:: What does the `%j` in the following code

```js
function receieveData(data) {
  console.log('I have got some data, it goes like this "%j"', data); //%j is for
}
eEmitter.on("jk", receieveData);
eEmitter.emit("jk", "I saw her!, She looked happy.");
eEmitter.removeListener("jk", receieveData);
eEmitter.emit("jk");
```

stands for?

A:: The `%j` in the `console.log()` statement is a format specifier used to format the output of the data argument as a JSON string.

In JS, when you pass an object or an array to `console.log()`, it will typically display the object or array in a more readable format, rather than just printing the object's string representation.

The `%j` format specifier tells `console.log()` to convert the data argument to a JSON string and insert it into the output string. This is useful when you want to display the contents of an object or array in a more readable format.

For example, if `data` is an object with the following structure:

```json
{
  "name": "John Doe",
  "age": 30,
  "email": "john.doe@example.com"
}
```

Then, the output of the following print statement

```js
console.log('I have got some data, it goes like this "%j"', data);
```

would be

```output
{"name":"John Doe","age":30,"email":"john.doe@example.com"}
```

The `%j` format specifier is a convenient way to display complex data structures in the console, making it easier to debug and inspect the data.
