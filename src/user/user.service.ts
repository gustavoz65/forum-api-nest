import { Inject, Injectable } from '@nestjs/common';
import { Prisma, User } from '@prisma/client';
import PrismaService from '../database/prisma.service';

@Injectable()
export class UserService {
  @Inject()
  private readonly prismaService: PrismaService;

  async createUser(data: Prisma.UserCreateInput): Promise<User> {
    return this.prismaService.user.create({
      data,
    });
  }
}
