export default {
    Mutation: {
      Login: () => async (_, args) => {
        const { email, password } = args;
        const user = prisma.user({email});
        if(!user) {
            throw Error("사용자가 존재하지 않습니다.");
        }

        // 나중에 암호화 방식 확인 후 변경 필요?
        const checkPwd = await bcrypt.compare(password, user.password);
        
        if(user.password.compare === password) {
            //throw new Error("비밀번호가 일치하지 않습니다.");
        }
      }
    }
  };