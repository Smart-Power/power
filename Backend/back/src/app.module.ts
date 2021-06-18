import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FeedbackController } from './feedback/feedback.controller';
import { FeedbackService } from './feedback/feedback.service';
import { FeedbackModule } from './feedback/feedback.module';
import { Feedback } from './feedback/feedback.entity';
// import { UserController } from './user/user.controller';
// import { User } from './user/user.entity';

// import { CarModule } from './car/car.module';
// import { UserModule } from './user/user.module';



@Module({
  imports: [
    
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'Taraji2020',
      database: 'feedback',
      entities: [Feedback],
      synchronize: true,
    }),
    FeedbackModule,
    // UserModule,
  ],
  controllers: [AppController, FeedbackController],
  providers: [AppService, FeedbackService],
})
export class AppModule {}
