const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());





const { getCompliment } = require('./controller')
const { getFortune } = require('./controller.js')
const { getState } = require('./controller.js')
const { getColor } = require('./controller.js')
const { getCars } = require('./controller.js')
const { deleteCars } = require('./controller.js')
// const { postAttendee } = require('./controller.js')


app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getFortune)
app.get("/api/states", getState)
app.get("/api/colors", getColor)
app.get("/api/cars", getCars)
app.delete("/api/states/:id", deleteCars)
// app.post("/api/attendees", postAttendee)


app.listen(4000, () => console.log("Server running on 4000"));
