import mongoose from "mongoose";
import Note from "../models/Note";
import ApiError from "../utils/ApiError";

const _repository = mongoose.model("Note", Note);

class NoteService {
  async getAll() {
    return await _repository.find({});
  }

  async getById(id) {
    let data = await _repository.findById(id);
    if (!data) {
     throw new ApiError("Invalid ID", 400);
    }
    return data;
  }

  async create(rawData) {
    let data = await _repository.create(rawData);
    return data;
  }

  async edit(id, update) {
    let data = await _repository.findOneAndUpdate({ _id: id }, update, {
      new: true
    });
    if (!data) {
       throw new ApiError("Invalid ID", 400);
    }
    return data;
  }

  async getNotesByBugId(postId) {
    let data = await _repository.find({ postId });
    if (!data) {
      throw new Error("Invalid Id");
    }
    return data;
  }
}

const noteService = new NoteService();
export default noteService;
