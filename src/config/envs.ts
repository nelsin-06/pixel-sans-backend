import 'dotenv/config';

export default () => ({
  env: process.env.ENV ? process.env.ENV : 'development',
  databaseUrl: process.env.DATABASE_URL
    ? process.env.DATABASE_URL
    : 'mongodb://localhost:27017/feature-tech',
  port: process.env.PORT ? parseInt(process.env.PORT, 10) : 3000,
});
