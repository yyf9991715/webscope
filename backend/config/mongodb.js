const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://webscope:webscope@cluster0.wv8jnc3.mongodb.net/?retryWrites=true&w=majority";
dbname="webscope"


const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function getData()
{
  var results=null;
  try{
    await client.connect();
    var dbo=client.db(dbname);
    var query={id:"Python for Data Analysis: Data Wrangling with Pandas, NumPy, and IPython"};
    await dbo.collection("Book").find(query).toArray(function(err,result){
      if(err)throw err;
      console.log("got the results");
      console.log(result.name);
    });
  }finally{
    await client.close();
    if(results)return results;
  }
}

async function test() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
getData();