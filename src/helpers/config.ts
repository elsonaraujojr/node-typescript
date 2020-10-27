const databaseCredential = {
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
  hostname: process.env.DB_HOSTNAME,
  password: process.env.DB_PASSWORD,
  port: parseInt(process.env.DB_PORT!),
};

export default databaseCredential;
