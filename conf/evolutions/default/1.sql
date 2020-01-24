# --- Created by Ebean DDL
# To stop Ebean DDL generation, remove this comment and start using Evolutions

# --- !Ups

create table t_relations (
  id                            bigserial not null,
  editor                        varchar(255),
  token_id                      bigint,
  one_tip_id                    bigint,
  other_tip_id                  bigint,
  create_time                   timestamp not null,
  update_time                   timestamp not null,
  update_count                  integer not null,
  constraint pk_t_relations primary key (id)
);

create table t_tips (
  id                            bigserial not null,
  editor                        varchar(255),
  token_id                      bigint,
  subject                       varchar(255),
  note                          varchar(255),
  tags                          varchar(255),
  create_time                   timestamp not null,
  update_time                   timestamp not null,
  update_count                  integer not null,
  constraint pk_t_tips primary key (id)
);

create table t_tokens (
  id                            bigserial not null,
  editor                        varchar(255),
  token                         varchar(255),
  create_time                   timestamp not null,
  update_time                   timestamp not null,
  update_count                  integer not null,
  constraint pk_t_tokens primary key (id)
);


# --- !Downs

drop table if exists t_relations cascade;

drop table if exists t_tips cascade;

drop table if exists t_tokens cascade;

