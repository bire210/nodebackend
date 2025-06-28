import { app } from "./app.js";
import { PORT } from "./config/enviromentConfig.js";

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
