import prisma from '../../prisma/schema.js';

class UserService {
  async getClientUsers() {
    try {
      const clientUsers = await prisma.user.findMany({
        where: {
          has_bought_before: true,
        },
        select: {
          user_id: true,
          email: true,
          has_bought_before: true,
          discord_id: true,
        },
      });

      return clientUsers;
    } catch (error) {
      console.error('Error fetching client users:', error);
      throw error;
    }
  }
}

export default new UserService();
