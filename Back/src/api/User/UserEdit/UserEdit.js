import { prisma } from "../../../../generated/prisma-client";

export default {
    Mutation: {
        UserEdit: () => async (_, args, {request}) => {
            const { password, avatar, firstname, lastname, status } = args;
            const { user } = request;
            return prisma.updateUser({
                where: { id: user.id },
                data: { password, avatar, firstname, lastname, status }
            })
        }
    }
}