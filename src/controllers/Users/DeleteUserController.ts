import { Request, Response } from "express";
import { DeleteUserService } from "../../services/Users/DeleteUserService";

class DeleteUserController {
  async delete(request: Request, response: Response) {
    const { id } = request.params;

    const deleteUserService = new DeleteUserService();

    await deleteUserService.exclude(id);

    return response.status(200).json({ message: "User deleted successfully." });
  }
}

export { DeleteUserController };
