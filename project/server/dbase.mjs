import mongoose from 'mongoose';
import bluebird from 'bluebird';

import config from './src/config/config';

mongoose.Promise = bluebird;

const dbase = {
  db: null,

  connect: async () => {
    if (this.db) return console.log('Connected to database');
    try {
      await mongoose.connect(
        config.db.uri,
        {
          useMongoClient: true
        }
      );
      this.db = mongoose.connection;
      console.log('Connected to database');
      return true;
    } catch (err) {
      console.error(err);
      throw error.dbConnection;
    }
  },

  get: () => {
    return this.db;
  },

  close: async () => {
    if (!this.db) return 'Not connected to database';
    try {
      await this.db.close();
      this.db = null;
      console.log('Connection to database closed');
    } catch (err) {
      console.error(`Unable to close connection to database: ${err}`);
    }
  }
};

export default dbase;
