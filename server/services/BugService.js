import mongoose from "mongoose";
import Bug from "../models/Bug";
import ApiError from "../utils/CleanupService";

const _repository = mongoose.model("Bug", Bug);

class BugService {
  async getAll() {
    return await _repository.find({});
  }
}

const bugService = new BugService();
export default bugService;
