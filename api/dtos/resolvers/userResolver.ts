import { Resolver, Query, Mutation, Arg } from "type-graphql";
import { UsersPermissionsLoginPayload } from "../models/UsersPermissionsLoginPayload";
import { UsersPermissionsRegisterInput } from "../inputs/UsersPermissionsRegisterInput";
import { plainToClass } from "class-transformer";
/* import { updateUserInput } from "../inputs/update-user-input"; */

Resolver();
export class userResolver {
  @Query(() => [UsersPermissionsLoginPayload], {
    description: "New recipe data",
  })
  async appointments() {
    return UsersPermissionsLoginPayload.find();
  }

  @Mutation(() => UsersPermissionsLoginPayload)
  async register(
    @Arg("data") data: UsersPermissionsRegisterInput
  ): Promise<UsersPermissionsLoginPayload> {
    const user = plainToClass(UsersPermissionsLoginPayload, {
      jwt: "111111",
      user: {
        username: data.username,
        email: data.email,
        password: data.password,
      },
    });
    console.log(user);
    const newUser = await UsersPermissionsLoginPayload.create({
      ...user,
    }).save();

    return newUser;
  }
}
