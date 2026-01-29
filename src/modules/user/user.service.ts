import { Injectable, Scope } from '@nestjs/common';
import { DatabaseService } from 'src/db/database.service';

// @Injectable({ scope: Scope.REQUEST }) // request scope: service được tạo mới mỗi khi có request mới.
@Injectable({ scope: Scope.TRANSIENT }) // transient scope: service được tạo mới mối khi nó được inject vào 1 class khác.
export class UserService {
    constructor(private readonly db: DatabaseService) {
        console.log('UserService constructor'); // - singleton ( mặc định): service chỉ được khởi tạo 1 lần duy nhất


    }
    getUsers() {
        return this.db.findAll();
    }
}
