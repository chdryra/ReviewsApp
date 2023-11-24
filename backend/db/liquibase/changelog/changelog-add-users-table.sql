--liquibase formatted sql

--changeset rizwan.choudrey:1
--comment: adding app_users table
create table app_users (
    id UUID primary key DEFAULT uuid_generate_v4(),
    email_address email not null,
    auth_provider VARCHAR(32) not null,
    created timestamp not null DEFAULT NOW()
)
--rollback DROP TABLE app_users;

 

