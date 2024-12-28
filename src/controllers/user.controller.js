import UserService from '../services/user.service.js';

class UserController {
  async getClients(req, res) {
    try {
      const clients = await UserService.getClientUsers();
      res.json(clients);
    } catch (error) {
      res.status(500).json({
        message: 'Error retrieving client users',
        error: error.message,
      });
    }
  }
}

export default new UserController();
