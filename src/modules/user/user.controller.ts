import { Controller, Get, Post, Delete, Param, Query, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { AuthService } from '../auth/auth.service';

@Controller('users')
export class UserController {
    constructor(private readonly userService: UserService, private readonly authService: AuthService) {
        console.log('UserController constructor');
    }
    @Get() // -> GET /users
    index() {
        return [this.userService.getUsers(), this.authService.login()];
    }
    
    @Get() 
    index2(@Query() query: any) {   // localhost:3000/users?keyword=123&category=456
        return {
            keyword: query.keyword,
            category: query.category,
        };
    }

    @Get(':id') // -> GET /users/:id    localhost:3000/users/1
    find (@Param('id') id: string) {
        return 'user ' + id;
    }

    @Post() // -> POST /users
    create(@Body() body: any) {
        return body;
    }
   
    @Delete() // -> DELETE /users/:id
    delete() {
        return 'delete';
    }
}
