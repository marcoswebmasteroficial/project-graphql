import { Field, InputType } from "type-graphql";
import { IsNotEmpty, MaxLength } from "class-validator";

@InputType()
export class UsersPermissionsRegisterInput {
  @Field()
  @IsNotEmpty()
  username: String;
  @Field()
  @IsNotEmpty()
  email: String;
  @Field()
  @IsNotEmpty()
  password: String;
}
