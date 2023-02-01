import { Resolver, Query, Mutation, Arg } from "type-graphql";
import { User } from "../models/user-model";
import { createUserInput } from "../inputs/create-user-input";
import { plainToClass } from "class-transformer";
/* import { updateUserInput } from "../inputs/update-user-input"; */

Resolver();
export class userResolver {
  @Query(() => [User], { description: "New recipe data" })
  async appointments() {
    return User.find();
  }

  @Mutation(() => User)
  async Register(@Arg("data") data: createUserInput): Promise<User> {
    const user = plainToClass(User, {
      username: data.username,
    });
    const newUser = await User.create({ ...user }).save();
    return newUser;
  }
}
