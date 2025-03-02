export default () => ({
    port: parseInt(process.env.PORT, 10) || 3000,
    mongo: {
      connectionString: process.env.CONNECTION_STRING.toString(),
    }
  });
