require("dotenv").config()
const { PORT = 5000 } = process.env;
const mongoose = require("mongoose")

const app = require("./app");

mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Listening on port: ${ PORT }`)
        })
    })
    .catch(error => console.log(error))


    // Keith was Here ^w^