export default {
    Mutation: {
      Login: () => async (_, args) => {
        const { id, password } = args;
        const user = prisma.user({id});
        if(!user) {
            throw Error("사용자가 존재하지 않습니다.");
        }

        // 나중에 암호화 방식 확인 후 변경 필요?
        const checkPwd = await bcrypt.compare(password, usr.password);
        if(!checkPwd) {
            throw new Error("비밀번호가 일치하지 않습니다.");
        }

        return true;
      }
    }
  };