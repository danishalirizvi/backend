import express from "express"
const router = express.Router()

let users = [
  {
    id: "1",
    first_name: "Syed",
    last_name: "Danish",
    email: "syeddanish@mail.com",
  },
  {
    id: "2",
    first_name: "Ali",
    last_name: "Rizvi",
    email: "alirizvi@mail.com",
  },
]

const findUserById = (id) => {
  return users.find((user) => user.id === id)
}

router.get("/", (req, res) => {
  res.send(users)
})

router.get("/:id", (req, res) => {
  const { id } = req.params

  const foundUser = findUserById(id)

  if (foundUser) res.send(foundUser)
  else res.send("User not found!")
})

router.post("/", (req, res) => {
  const user = req.body

  users.push({ ...user, id: (users.length + 1).toString() })
  res.send("New user added successfully!")
})

router.delete("/:id", (req, res) => {
  const { id } = req.params

  const foundUser = findUserById(id)

  if (foundUser) {
    users = users.filter((user) => user.id !== id)
    res.send("User removed successfully!")
  } else {
    res.send("User not found!")
  }
})

router.patch("/:id", (req, res) => {
  const { id } = req.params

  const newUserDetails = req.body

  let user = users.find((user) => user.id === id)

  user = { ...user, ...newUserDetails }

  res.send(`User details has been updated`)
})

export default router
