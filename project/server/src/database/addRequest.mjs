import dbase from '../../dbase';
import Requests from '../models/Requests';

/**
 * Add document to Request collection in database
 *
 * @method addRequest
 * @param {string} vApi	random api endpoint
 * @param {number} expireAt number of milliseconds since January 1, 1970, 00:00:00 UTC
 */
const addRequest = async (vApi, expireAt) => {
  try {
    await dbase.connect();
    requests = new Requests({
      _id: new mongoose.Types.ObjectId(),
      vApi,
      expireAt: new Date(expireAt)
    });
    await requests.save();
    await dbase.close();
    return true;
  } catch (err) {
    await dbase.close();
    throw Error(err);
  }
};

export default addRequest;
