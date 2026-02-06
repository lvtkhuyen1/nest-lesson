import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/user/user.module';
import { AuthModule } from './modules/auth/auth.module';
import { CarModule } from './modules/car/car.module';
import { PrismaModule } from './prisma/prisma.module';
import { TicketModule } from './modules/ticket/ticket.module';

@Module({
  imports: [UserModule, AuthModule, CarModule, PrismaModule, TicketModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
