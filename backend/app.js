const express=require("express");
const app=express();
require("express-async-errors"); 


const config=require("./config/config");


// security packages
const helmet=require("helmet");
const cors=require("cors");
const xss=require("xss-clean");
const rateLimit = require('express-rate-limit');


// connectDB
const connectDB=require('./db/connect');


// routers
const authRouter=require("./routes/auth");
const dishRouter=require("./routes/dishs");
const userRouter=require("./routes/users");
const cartRouter=require("./routes/cart")

const authenticateUser=require("./middleware/authenticationMiddleware");

// error handler
const errorHandlerMiddleware = require("./middleware/errorHandlerMiddleware");
const NotFoundMiddleware = require("./middleware/notFoundMiddleware");

app.set('trust proxy', 1)
app.use(rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
	standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers
}))

// for body-parser
app.use(express.json());
app.use(express.urlencoded({extended:true}));
// http://127.0.0.1:8000/uploads/<name of image>
app.use('/uploads', express.static('uploads/images'));

// security middleware
app.use(helmet());
app.use(cors());
app.use(xss());



//& Routes
app.use("/api/v1/auth",authRouter);
app.use("/api/v1/dishes",dishRouter);

app.use("/api/v1/cart",cartRouter);

//& for admin
app.use("/api/v1/users",userRouter);
  

app.use(NotFoundMiddleware)
app.use(errorHandlerMiddleware)


const port = config.PORT || 3000;







//& to make the connection to database and start the server at the same time
//& we will start the server if the connection to database is successful
const start = async () => {
    try {
      //* for connecting to database
      await connectDB(config.MONGO_URI);
      //* to start the server
      app.listen(port, () =>
        console.log(`Server is listening on port ${port}...`)
      );
    } catch (error) {
      console.log(error);
    }
  };
  
  start();
