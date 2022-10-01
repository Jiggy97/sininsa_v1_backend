import * as bcrypt from 'bcrypt';

export class Crypto {
  static async encrypt(password: string) {
    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);
    return bcrypt.hash(password, salt);
  }
  // password: body 를 통해 사용자에게 받은 비밀번호, hash: DB 에 존재하는 사용자 비밀번호
  static isMatch(password: string, hash: string): Promise<boolean> {
    return bcrypt.compare(password, hash);
  }
}
