import {
  Entity,
  BaseEntity,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Field, ID, ObjectType } from "type-graphql";
import { IsNotEmpty } from "class-validator";

@Entity({ name: "UsersPermissionsMe" })
@ObjectType({ description: "Object representing cooking recipe" })
export class UsersPermissionsMe extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  @IsNotEmpty()
  id: String;
  @Field()
  @IsNotEmpty()
  username: String;
  @Field()
  @IsNotEmpty()
  email: String;
  @Field()
  confirmed: Boolean;
  @Field()
  blocked: Boolean;
}
