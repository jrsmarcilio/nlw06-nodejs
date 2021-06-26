import { Request, Response } from "express";
import { ShowTagsService } from "../../services/Tags/ShowTagsService";

class ShowTagsController {
  async show(request: Request, response: Response) {
    const showTagsService = new ShowTagsService();

    const tags = await showTagsService.findAll();

    return response.json(tags);
  }
}

export { ShowTagsController };
