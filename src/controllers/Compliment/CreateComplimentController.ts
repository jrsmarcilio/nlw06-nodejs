import { Request, Response } from "express";
import { CreateComplimentService } from "../../services/Compliments/CreateComplimentService";

class CreateComplimentController {
  async handle(request: Request, response: Response) {
    const { user_receiver, message, tag_id } = request.body;
    const { id: user_sender } = request.params;

    const createComplimenteService = new CreateComplimentService();

    const cumpliment = await createComplimenteService.execute({
      user_receiver,
      user_sender,
      message,
      tag_id,
    });

    return response.json(cumpliment);
  }
}

export { CreateComplimentController };
