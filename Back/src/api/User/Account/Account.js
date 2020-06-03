import { prisma } from "../../../../generated/prisma-client"

export default {
    Mutation: {
      Account: () => async (_, args) => {
        const { id,password, username,email,gender,firstName = '',lastName = '' } = args;
        const exists = await prisma.$exists.user({
          OR: [
            {username},
            {email}
          ]
        });
        if (exists){
          throw Error("이미 존재하는 아이디/이메일 입니다.");
        }
        await prisma.createUser({
          id,
          password,
          username,
          email,
          gender,
          firstName,
          lastName
        });
        return true;
      }
    }
  };