import User from "../Models/usermodel.js";

export const create = async (req, res) => {
  try {
    let userData = new User(req.body);
    let { email } = userData;
    let userExist = await User.findOne({ email })

    if (userExist) {
      return res.status(400).send("user already exist")
    } else {
      let dataSaved = await userData.save();
      if (dataSaved) {
        return res.status(200).json(dataSaved)
      }
    }
  } catch (error) {
    console.error(error);
    res.status(500).json(error)
  }
}


export const fetch = async (req, res) => {
  try {
    let allUsers = await User.find();
    if (allUsers.length === 0) {
      res.status(404).json({ message: "User not found." })
    }
    res.status(200).json(allUsers)
  } catch (error) {
    res.status(500).send("Something went wrong");
  }
}


export const update = async (req, res) => {
  try {
    const id = req.params.id
    const userExist = await User.findOne({ _id: id })

    if (!userExist) {
      res.status(404).json({ message: "User not found" })
    }

    const userUpdated = await User.findByIdAndUpdate(id, req.body, { new: true })

    if (userUpdated) {
      res.status(200).json(userUpdated)
    }

  } catch (err) {
    res.status(500).json({ message: "Internal Server Error" })
  }
}

export const deleteUser = async (req, res) => {
  try {
    const id = req.params.id
    const userExist = await User.findOne({ _id: id })
    if (!userExist) {
      res.status(404).json({ message: "User Not Found" })
    }
    let userDeleted = await User.findByIdAndDelete(id)
    if (userDeleted) {
      res.status(200).json({ message: "User Deleted Successfully." })
    }
  } catch (error) {
    res.status(500).json({ message: "User has been Deleted." })
  }
}
