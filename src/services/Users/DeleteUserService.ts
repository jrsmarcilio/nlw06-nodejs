import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../../repositories/UsersRepositories";

class DeleteUserService {
  async exclude(id: string) {
    const usersRepository = getCustomRepository(UsersRepositories);

    if (!id) throw new Error("Id incorrect");

    const userAlreadExists = await usersRepository.findOne({ id });

    if (!userAlreadExists) throw new Error("User not found");

    return usersRepository.delete(id);
  }
}

export { DeleteUserService };
