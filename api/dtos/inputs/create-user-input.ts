import { Field, InputType } from "type-graphql";
import { MaxLength } from "class-validator";

@InputType()
export class createUserInput {
  @Field()
  @MaxLength(30)
  username: String;
}
