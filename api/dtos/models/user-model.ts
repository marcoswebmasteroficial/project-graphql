import { Entity, BaseEntity, PrimaryColumn } from "typeorm";
import { Field, ObjectType } from "type-graphql";

@Entity({ name: "users" })
@ObjectType({ description: "Object representing cooking recipe" })
export class User extends BaseEntity {
  @Field()
  @PrimaryColumn()
  username: String;
}
