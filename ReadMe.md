Steps to create sever

1. npm init -y
2. npm install express
3. import express from 'express';
4. const app = express();
5. app.get('/', (req, res) => {
   res.send('Hello World!');
});
6. const PORT = process.env.PORT || 3000;
7. app.listen(PORT, () => {
   console.log(`Server is running on port ${PORT}`);
});
add---"type": "module", tp your `package.json` file to enable ES module syntax.
8. Save the file as `server.js`.
8. Create a file named `server.js` and paste the code above.
9. Run the server using the command `node server.js`.
10. Open your browser and go to `http://localhost:3000` to see "Hello World!" displayed.
11. To stop the server, press `Ctrl + C` in the terminal where the server is running.
12. To install additional packages, use `npm install <package-name>`.
13. To run the server in development mode with automatic restarts, you can install `nodemon`:
    - Run `npm install -g nodemon` to install it globally.
    - Start your server with `nodemon server.js`.
14. To create a basic HTML file, create a folder named `public` and inside it create an `index.html` file with the following content:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Express App</title>
</head>
<body>
    <h1>Hello World!</h1>
    <p>Welcome to my Express app!</p>
</body>
</html>
```
15. To serve static files from the `public` folder, add the following line to your `server.js` file:
```javascript
app.use(express.static('public'));
```
16. Now, when you navigate to `http://localhost:3000`, you should see the content of `index.html` instead of "Hello World!".
17. To handle JSON requests, you can add the following middleware to your `server.js` file:
```javascript
app.use(express.json());
```
18. To handle form submissions, you can add the following middleware to your `server.js` file:
```javascript
app.use(express.urlencoded({ extended: true }));
```