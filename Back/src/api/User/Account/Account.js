export default {
    Mutation: {
      Account: () => async (_, args) => {
        const { id,password, username,email,gender,firstName = '',lastName = '' } = args;
        const user = prisma.createUser({
          id,
          password,
          username,
          email,
          gender,
          firstName,
          lastName
        });
        return user;
      }
    }
  };