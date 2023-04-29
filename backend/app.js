const express=require("express");
const app=express();

const config=require("./config/config");


// connectDB
const connectDB=require('./db/connect');


// for body-parser
app.use(express.json());
app.use(express.urlencoded({extended:true}));




app.get('/',(req,res)=>{
    res.send('hello world');
  })



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
