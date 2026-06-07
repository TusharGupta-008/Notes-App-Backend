import User from "../models/user.model.js";

const signUp = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    if (!name || !email || !password) {
      return res.status(400).json({
        message: "Send all the details",
      });
    }
    const existingEmail = await User.findOne({ email });
    if (existingEmail) {
      return res.status(400).json({
        message: "User already exists",
      });
    }
    const newUser = await User.create({
      name,
      email,
      password,
    });
    return res.status(201).json({
      message: "New User created",
      newUser,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Server error",
      error,
    });
  }
};


export default signUp;
