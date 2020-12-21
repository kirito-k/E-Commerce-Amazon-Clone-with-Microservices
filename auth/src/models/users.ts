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
// By adding this doc info, we can do "user.email" when we create a
// new user.
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

userSchema.statics.build = (attrs: UserAttrs) => {
  return new User(attrs);
};

const User = mongoose.model<UserDoc, UserModel>("User", userSchema);

export { User };
