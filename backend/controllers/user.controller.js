import jsonwebtoken from "jsonwebtoken";
import User from "../models/user.model.js";
import bycryptjs from "bcryptjs";
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
    const hashedPass = await bycryptjs.hash(password, 10);
    const newUser = await User.create({
      name,
      email,
      password: hashedPass,
    });
    return res.status(201).json({
      message: "New User created",
      newUser,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Server error",
    });
  }
};
const login = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const existingUser = await User.findOne({ email });

    if (!existingUser) {
      return res.status(400).json({
        message: "User does not exists",
      });
    }
    const comparePass = await bycryptjs.compare(
      password,
      existingUser.password,
    );
    if (!comparePass) {
      return res.status(400).json({
        message: "wrong password",
      });
    }

    const token = jsonwebtoken.sign(
      { id: existingUser._id },
      process.env.JWT_SECRET,
      { expiresIn: "5d" },
    );
    return res.status(201).json({
      message: "User found",
      User: {
        name,
        email,
      },
      token,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Server error",
      error,
    });
  }
};

export { signUp, login };
