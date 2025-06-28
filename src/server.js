import { app } from "./app.js";
import { dbConnect } from "./config/dbConfig.js";
import { PORT } from "./config/enviromentConfig.js";

app.listen(PORT, async() => {
  try {
    await dbConnect()
    console.log("Data base connected")
    console.log(`Server running on port ${PORT}`);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
  
});
