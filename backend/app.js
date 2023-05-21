const express=require("express");
const app=express();
require("express-async-errors"); 



const config=require("./config/config");


// connectDB
const connectDB=require('./db/connect');


// routers
const authRouter=require("./routes/auth");


const authenticateUser=require("./middleware/authenticationMiddleware");

// error handler
const errorHandlerMiddleware = require("./middleware/errorHandlerMiddleware");
const NotFoundMiddleware = require("./middleware/notFoundMiddleware");


// for body-parser
app.use(express.json());
app.use(express.urlencoded({extended:true}));



//& Routes
app.use("/api/v1/auth",authRouter);
app.get('/',authenticateUser,(req,res)=>{
  res.json(req.user)
})
  

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
