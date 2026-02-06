\*/ tạo module: nest generate module modules/user
hoặc tạp ngắn hơn nest g module user + nest g controller user
\*/ tạo controller: nest generate controller user
\*/ tạo module đầy đủ: nest g res user (module: dto + entities + controller + service + module)

1. Dependency Injection (DI) là kĩ thuật mà 1 class nhận phụ thuộc từ bên ngoài thay vì tự tạo.
   nestjs tự động quản lý dependency thông qua IoC Container (Inversion of Control).
   DI giúp: Giảm phụ thuộc giữa các class, Dễ dàng mở rộng và test code.

2. Scope của Provider trong DI

- singleton ( mặc định): service chỉ được khởi tạo 1 lần duy nhất
- request scope: service được tạo mới mỗi khi có request mới.
- transient scope: service được tạo mới mối khi nó được inject vào 1 class khác.

3. typeorm là thư viện cho phép tương tác với csdl thông qua class và object thay vì viết trực tiếp câu lệnh truy vấn sql.

4. prisma: ORM thế hệ mới, thiên về type-safety + DX (developer experience).

5. Routing là quá trình định nghĩa và xử lý các endpoint API để nhận và phản hồi yêu cầu HTTP.
   Mỗi route được định nghãi trong một controller.

6. Controller chịu trách nhiệm:

- xử lý các yêu cầu HTTP từ client
- gọi các service để thực thi logic nghiệp vụ
- trả về dữ liệu hoặc thông báo kết quả.
  Controller sử dụng decorators để xác định các route và phương thức HTTP: get post put delete patch

7. Prisma

- lệnh cài và init
  npm install prisma --save-dev
  npm install @prisma/client
  npx prisma init
  npx prisma migrate dev --name init
  npx prisma studio

8. generate prisma client
   npm install prisma @prisma/client
   npx prisma generate

npx prisma migrate dev
npx prisma generate
