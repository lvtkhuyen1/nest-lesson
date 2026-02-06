import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';

@Injectable()
export class AuthService {
    constructor(private readonly prisma: PrismaService) { }

    async create(createAuthDto: CreateAuthDto) {
        const user = await this.prisma.user.create({
            data: {
                name: createAuthDto.name,
                phone: createAuthDto.phone,
                email: createAuthDto.email,
            }
        })
        return user
    }

    async findAllItems() {
        const users = await this.prisma.user.findMany();
        return users;
    }

    findOne(id: number) {
        return `This action returns a #${id} auth`;
    }

    async update(id: number, updateAuthDto: UpdateAuthDto) {
        const user = await this.prisma.user.update({ where: { id }, data: updateAuthDto })
        return user
    }

    async remove(id: number) {
        await this.prisma.user.delete({ where: { id } })
    }
}
