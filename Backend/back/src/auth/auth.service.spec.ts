<<<<<<< HEAD:Backend/back/src/user/user.service.spec.ts
// import { Test, TestingModule } from '@nestjs/testing';
// import { UserService } from './user.service';

// describe('UserService', () => {
//   let service: UserService;

//   beforeEach(async () => {
//     const module: TestingModule = await Test.createTestingModule({
//       providers: [UserService],
//     }).compile();

//     service = module.get<UserService>(UserService);
//   });
=======
import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AuthService],
    }).compile();

    service = module.get<AuthService>(AuthService);
  });
>>>>>>> 389d1f724a13eff03df1aa772b552773055da54d:Backend/back/src/auth/auth.service.spec.ts

//   it('should be defined', () => {
//     expect(service).toBeDefined();
//   });
// });
