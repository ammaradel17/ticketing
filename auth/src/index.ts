import mongoose from 'mongoose';

import { app } from './app';

const start = async () => {
  console.log('starting up ...')
  if (!process.env.JWT_KEY) {
    throw new Error('JWT_KEY must be defined');
  }
  const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000,
    autoIndex: false, // Don't build indexes
    maxPoolSize: 10, // Maintain up to 10 socket connections
     // @ts-ignore
    serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
    socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
    family: 4 // Use IPv4, skip trying IPv6
  }
  try {
    await mongoose.connect(process.env.MONGO_URI!,options);
    console.log('Connected to MongoDb');
  } catch (err) {
    console.error(err);
  }

  app.listen(3000, () => {
    console.log('Listening on port 3000!!!!!!!!');
  });
};

start();
