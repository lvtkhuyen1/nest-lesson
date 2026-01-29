import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';
import { AuthService } from '../auth/auth.service';

@Controller('users')
export class UserController {
    constructor(private readonly userService: UserService, private readonly authService: AuthService) {
        console.log('UserController constructor');
    }
    @Get() // -> users
    index() {
        return [this.userService.getUsers(), this.authService.login()];
    }
}
