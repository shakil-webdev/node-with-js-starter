const app = require("./app");
const config = require("./config");

// database connection
// DBConnect();
async function bootstrap() {
  try {
    // await mongoose.connect(config.database_url)
    // console.log('🛢️ Database successfully connected')

    app.listen(config.port, () => {
      console.log(`Application  listening on port ${config.port}`);
    });

  } catch (err) {
    console.error('Failed to connect database', err)
  }
}

bootstrap()

