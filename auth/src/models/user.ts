import mongoose from "mongoose";

// Interface describing what attributes we need to create a new User.
interface UserAttrs {
  email: string;
  password: string;
}

// Interface that describe what extra methods will be in Mongoose Model
interface UserModel extends mongoose.Model<UserDoc> {
  build(attrs: UserAttrs): UserDoc;
}

// Interface that describe properties that our User document has
interface UserDoc extends mongoose.Document {
  email: string;
  password: string;
}

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const User = mongoose.model<UserDoc, UserModel>("User", userSchema);

export { User };
