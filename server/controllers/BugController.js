import express from "express";
import bugService from "../services/BugService";
import noteService from "../services/NoteService";
import { Authorize } from '../middleware/authorize.js'

export default class BugController {
  constructor() {
    this.router = express
      .Router({ mergeParams: true }) 
      //NOTE  each route gets registered as a .get, .post, .put, or .delete, the first parameter of each method is a string to be concatinated onto the base url registered with the route in main. The second parameter is the method that will" be run when this route is hit.
      .use(Authorize.authenticated)
      .get("", this.getAll)
      .get("/:id", this.getById)
      .post("", this.create) //api/bugs
      .get("/:id/notes", this.getNotesByBugId)//returns all notes for a given bug id
      .delete("/:id", this.delete)
      .use(this.defaultRoute)


  }

  async getAll(req, res, next) {
    try {
      let data = await bugService.getAll();
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }
  async getById(req, res, next) {
    try {
      let data = await bugService.getById(req.params.id);
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }
async create(req, res, next) {

    try {
      let data = await bugService.create(req.body);
      return res.status(201).send(data);
    } catch (error) {
      next(error);
    }
  }

  async edit(req, res, next) {
    try {
      let data = await bugService.edit(req.params.id);
      return res.send(data);
    }catch (error) {
      next(error);
    }
  }

  async getNotesByBugId(req, res, next) {
    try {
      let data = await noteService.getNotesByBugId(req.params.id);
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }

  async delete(req, res, next) {
    try {
      await bugService.delete(req.params.id);
      return res.send("Successfully Deleted");
    } catch (error) {
      next(error);
    }
  }

  //FIXME add close method for bug(refer to sold method on gregslist)FIXED!
}

