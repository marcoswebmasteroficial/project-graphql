import { Entity, BaseEntity, PrimaryColumn } from "typeorm";
import { Field, ObjectType } from "type-graphql";
import { UsersPermissionsMe } from "./UsersPermissionsMe";

@Entity({ name: "UsersPermissionsLoginPayload" })
@ObjectType({ description: "Object representing cooking recipe" })
export class UsersPermissionsLoginPayload extends BaseEntity {
  @Field()
  @PrimaryColumn()
  jwt: String;
  @Field()
  user: UsersPermissionsMe;
}
