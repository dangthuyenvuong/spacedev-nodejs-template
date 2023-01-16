# Project template

1. Dễ maintaince, scale up

    Cách thức hoạt động đơn giản, tạo ra một api, message-broker dễ dàng. Tự động load file và inject vào các provider cần thiết

    Model, Validator được đồng bộ giúp dễ dàng trong việc thao tác dữ liệu

    Cấu trúc thư mục được chia theo từng module giúp cho việc quản lý code cực kì đơn giản

    Hệ thống được thiết kế theo dạng service-oriented architecture (SOA Phần mềm theo hướng dịch vụ) giúp cho việc maintaince và scale up dễ dàng. Không lưu trữ các phiên làm việc

    Hệ thống các service cloud được viết sẵn

    Mở rộng column dễ dàng theo từng tenant với schema và migrate



2. An toàn

    Validate tự động dựa theo `Model` đảm bảo an toàn dữ liệu cho database

    Mapping đầu ra tự động và bảo vệ thông tin quan trọng khi lấy dữ liệu từ `Model` được tự động. Trong trường hợp muốn thao tác với những field đặc biệt, cần sử dụng `method` chuyên dụng

    Http Response, Error Exception Handling được chuẩn hóa

    Lưu trữ resquest, access database, error (domain, file, line) tự động giúp cho việc truy xuất nguồn gốc trở nên dễ dàng


3. Đồng bộ

    Hệ thống sử dụng các công nghệ đồng bộ tiên tiến giúp cho các logic trở nên dễ dàng và đúng đắn: Model, Hook, Caching


3. Công nghệ

    Caching được sử dụng hầu hết trong các Rest api dựa theo url input, tự động clear cache khi có sự thay đổi





# Công nghệ

1. Knex, migrate, seed

2. module, DI/IoC, Domain-Driven-Design, Decorator, Provider, Hook

3. Base, Core, Model, Feature

4. Feature: config, models, eav, presentation, domain, infra

5. 1 file thiết kế table duy nhất: Entity, Model, DTO


# Cách thức hoạt động 3 player

## 3 Player gồm

1. App: Request được gửi từ: 

    1. Rest
    
    2. Message Queque

    3. CLI,....

2. Domain: Linh hồn của ứng dụng, nới chưa các logic, entity chính của dự án

    1. DTO

    2. Mapper

    3. Repo

    4. Entity

        - Tạo các thực thể từ database

        - Valdiate đầu vào 

        - 

    5. Aggregate

        root: EntityRoot

        entity



3. Infra: Giao tiếp với database và các api bên thứ 3

    2. Dao: Giao tiếp với databse

    3. Api: Giao tiếp với data từ bên thứ 3



# Cách thức hoạt động

1. Tự động load file trong module

    - Dựa theo đuôi file để tự động load và inject các dependency: rest, decorator, provider, model

    - Tự động load file config trong module

        1. `enabled`: Bật tắt module

        2. `prefix`: Url prefix dành cho rest api

        3. `permission`:Danh sách permision dùng trong module

        4. `database`: Thông tin kết nối database nếu muốn sử dụng một database ngoài

        5. `name, description, cover, url, tag, version, author`: Thông tin module

        6. ``: 

        7. Ngoài ra còn có những `config` khác được dùng trong module 