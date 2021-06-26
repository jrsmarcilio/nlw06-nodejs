import { Request, Response } from "express";
import { ShowUsersService } from "../../services/Users/ShowUsersService";

class ShowUsersController {
  async show(request: Request, response: Response) {
    const showUsersService = new ShowUsersService();

    const user = await showUsersService.findAll();

    return response.json(user);
  }
}

export { ShowUsersController };
