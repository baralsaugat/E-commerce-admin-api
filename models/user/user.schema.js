import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    fName: {
      type: String,
      require: true,
      default: "",
    },
    lName: {
      type: String,
      require: true,
      default: "",
    },
    email: {
      type: String,
      require: true,
      default: "",
    },

    password: {
      type: String,
      require: true,
      default: "",
    },
  },
  {
    timestamp: true,
  }
);

const adminUsersSchema = mongoose.model("Admin_user", userSchema);

export default adminUsersSchema;
