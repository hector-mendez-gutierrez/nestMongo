import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemsModule } from './items/items.module';
import { AuhtModule } from './auht/auht.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/nest'), ItemsModule, AuhtModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
