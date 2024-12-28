import prisma from '../../prisma/schema.js';

class UserService {
  async getClientUsers() {
    try {
      const clientUsers = await prisma.user.findMany({
        where: {
          has_bought_before: true,
        },
        select: {
          id: true,
          email: true,
          has_bought_before: true,
        },
      });

      return clientUsers.map((user) => ({
        ...user,
        random_number: Math.floor(Math.random() * 100), // placeholder for discor ids once ago stops being fucking stupid and integrates discord
      }));
    } catch (error) {
      console.error('Error fetching client users:', error);
      throw error;
    }
  }
}

export default new UserService();
