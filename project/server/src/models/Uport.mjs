import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

const userSchema = mongoose.Schema(
  {
    _id: {
      type: mongoose.Schema.Types.ObjectId
    },
    uuid: {
      type: String,
      index: true,
      unique: true,
      required: true
    }
  },
  {
    timestamps: true
  }
);

userSchema.plugin(uniqueValidator);

export default mongoose.model('Uport', userSchema);
