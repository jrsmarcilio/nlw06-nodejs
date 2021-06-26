import { getCustomRepository } from "typeorm";
import { TagsRepositories } from "../../repositories/TagsRepositories";

class ShowTagsService {
  async findAll() {
    const tagsRepositories = getCustomRepository(TagsRepositories);

    const tags = await tagsRepositories.find();

    if (!tags) throw new Error("No Tags were found.");

    return tags;
  }
}

export { ShowTagsService };
