1. Dependency Injection (DI) là kĩ thuật mà 1 class nhận phụ thuộc từ bên ngoài thay vì tự tạo.
   nestjs tự động quản lý dependency thông qua IoC Container (Inversion of Control).
   DI giúp: Giảm phụ thuộc giữa các class, Dễ dàng mở rộng và test code.

2. Scope của Provider trong DI

- singleton ( mặc định): service chỉ được khởi tạo 1 lần duy nhất
- request scope: service được tạo mới mỗi khi có request mới.
- transient scope: service được tạo mới mối khi nó được inject vào 1 class khác.
