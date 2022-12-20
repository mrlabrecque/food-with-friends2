// create an express app
const express = require("express")
const path = require('path');
const cors = require('cors');
const app = express()

// use the express-static middleware
app.use(express.static(path.join(__dirname, 'dist/foodwithfriends')));
app.use(cors());

// define the first route

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'dist/foodwithfriends/index.html'));
});


// start the server listening for requests
app.listen(process.env.PORT || 3000, 
	() => console.log("Server is running..."));

// Get our API routes
const restaurantRoutes = require('./routes/restaurant.routes');
// const groupRoutes = require('./routes/group.routes');
// const userRoutes = require('./routes/user.routes');
//Requests
app.use("/api/v1/restaurants", restaurantRoutes);
// app.use("/api/v1/users", userRoutes);
// app.use("/api/v1/groups", groupRoutes);





// Get dependencies
// const express = require('express');
// const app = express();
// const DB_URI = 'mongodb+srv://mrlabrecque:joystick5852@fwf.tahhq.mongodb.net/food_with_friendsDB?retryWrites=true&w=majority';
// const mongoose = require('mongoose')
// const mysql = require('mysql');
// const path = require('path');
// const cors = require('cors');
// const morgan = require('morgan');
// const dotenv = require('dotenv');
// const config = require('./config/db.config.json');
// const fs = require('fs');
// const https = require('https');
// const passport = require('passport');
// const sslOptions = {
//   key: fs.readFileSync(__dirname + '/key.pem'),
//   cert: fs.readFileSync(__dirname + '/cert.pem'),
//   ca: fs.readFileSync(__dirname + '/chain.pem')
// };
// Server configs
// const allowedOrigins = [
//   'capacitor://localhost',
//   'ionic://localhost',
//   'http://localhost',
//   'http://localhost:8080',
//   'http://localhost:8100'];

// Reflect the origin if it's in the allowed list or not defined (cURL, Postman, etc.)
// const corsOptions = {
//   origin: (origin, callback) => {
//     if (allowedOrigins.includes(origin) || !origin) {
//       callback(null, true);
//     } else {
//       callback(new Error('Origin not allowed by CORS'));
//     }
//   }
// }
// app.use(cors());
// app.options('*', cors(corsOptions));
// dotenv.config()
// mongoose.connect(process.env.DB_URI, {
//   useUnifiedTopology: true,
//   useNewUrlParser: true,
//   useCreateIndex: true,
// })
//   .then(() => console.log('Connected to DB'))
//   .catch((err) => console.log(err))

// mongoose.connection.on('error', err => console.log(`DB connection error: ${err}`))




//Middleware
// app.use(express.json()) // for parsing application/json
// app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
// app.use(morgan("dev"));
// app.use(passport.initialize());
// const passportMiddleware = require('./utils/passport');
// passport.use(passportMiddleware);

// app.use((req, res, next) => {
//   res.setHeader('Access-Control-Allow-Origin', '*');
//   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT ,DELETE, OPTIONS');
//   res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization, access-control-allow-orgin, Access-Control-Allow-Methods');
//   res.header("Content-Type", "application/json");
//   next();
// });

// Get our API routes
// const groupRoutes = require('./routes/group.routes');
// const userRoutes = require('./routes/user.routes');
//Requests
// app.use("/api/v1/users", userRoutes);
// app.use("/api/v1/groups", groupRoutes);




//Instansiate Connection
// const connection = mysql.createConnection({
//   host: config.HOST,
//   port: config.PORT,
//   user: config.USER,
//   password: config.PASSWORD,
//   database: config.DB
// });
// connection.connect((err) => {
//   if (err) {
//     console.log("not connected");
//   } else {
//     console.log("connected");
//   }
// });




// Parsers for POST data



// Point static path to dist
// app.use(express.static(path.join(__dirname, 'public')));

// Set our api routes
//app.use('/api', api);

// Catch all other routes and return the index file
// app.get('/', cors(corsOptions), (req, res) => {
//   res.sendFile(path.join(__dirname, 'public/index.html'));
// });

/**
 * Get port from environment and store in Express.
 */
// const port = 12000;
// app.set('port', port);
// const sslServer = https.createServer(sslOptions, app);


//remove this when developing locally
// const server = https.createServer(sslOptions, app)
//   .listen(port, () => {
//     console.log('secure server running at ' + port)
//   })

// app.listen(port, () => console.log(`API running on port:${port}`));
