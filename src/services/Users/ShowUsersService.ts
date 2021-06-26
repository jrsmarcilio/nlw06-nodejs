import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../../repositories/UsersRepositories";

class ShowUsersService {
  async findAll() {
    const usersRepository = getCustomRepository(UsersRepositories);

    const users = await usersRepository.find();

    if (!users) throw new Error("No Users were found.");

    return users;
  }
}

export { ShowUsersService };
