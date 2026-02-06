import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client/extension';

@Injectable()
export class PrismaService extends PrismaClient
    implements OnModuleInit {
    async onModuleInit() {
        await this.$connect();
    }
}

export const prisma = new PrismaClient({
    datasourceUrl: process.env.DATABASE_URL,
});