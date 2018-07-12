import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

const requestSchema = mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId
  },
  vApi: {
    type: String,
    index: true,
    unique: true,
    required: true
  },
  cred: {
    type: Object
  },
  expireAt: {
    type: Date,
    required: true
  }
});

requestSchema.index(
  {
    expireAt: 1
  },
  {
    expireAfterSeconds: 0
  }
);

requestSchema.plugin(uniqueValidator);

export default mongoose.model('Uport', requestSchema);
