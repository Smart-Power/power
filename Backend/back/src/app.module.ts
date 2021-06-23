import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FeedbackModule } from './feedback/feedback.module';
import { Feedback } from './feedback/feedback.entity';
import { User } from './user/user.entity';
import { Car } from './car/entities/car.entity';



@Module({
  imports: [
    
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'Taraji2020',
      database: 'power',
      entities: [Feedback, User, Car],
      synchronize: true,
    }),
    FeedbackModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
