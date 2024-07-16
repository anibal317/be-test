import { Injectable } from '@nestjs/common';
import * as bcrypt from "bcryptjs";


@Injectable()
export class EncryptService {
  async create(pwd: string) {
    const hashedPassword = await bcrypt.hash(pwd.toString(), 10)
    return hashedPassword;
  }

  async compare(pwd: string) {
    let res = await bcrypt.compare(pwd.toString(), '$2a$10$ME3hx5EDom.reKmR/R/CpOpKSaD.2L8CT3yC.D7mjxtX32gfqc1/a')
    return res
  }

  /*
    findAll() {
      return `This action returns all encrypt`;
    }
  
    findOne(id: number) {
      return `This action returns a #${id} encrypt`;
    }
  
    update(id: number, updateEncryptDto: UpdateEncryptDto) {
      return `This action updates a #${id} encrypt`;
    }
  
    remove(id: number) {
      return `This action removes a #${id} encrypt`;
    }
    */
}
