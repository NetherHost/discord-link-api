const authenticateBot = (req, res, next) => {
  const apiKey = req.headers['x-api-key'];
  if (apiKey != process.env.API_KEY) {
    return res
      .status(401)
      .json({ message: '401 Unathorized: Invalid API key' });
  }
  next();
};

export default authenticateBot;
