import mongoose from "mongoose";
import config from "./config/index.js";
import app from "./app.js";

function main() {
  try {
    mongoose.connect(config.mongodb_url);

    app.listen(config.port, () => {
      console.log(`server listening on port ${config.port}`);
    });
  } catch (err) {
    console.log(err);
  }
}

main();
