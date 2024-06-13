import express from "express"
import userRoutes from "./routes/users.js"

const app = express()
const PORT = 5001

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.listen(PORT, () =>
  console.log(`Server running on port: http://localhost:${PORT}`)
)

app.use("/users", userRoutes)

app.get("/ping", (req, res) => {
  res.send("pong!")
})
