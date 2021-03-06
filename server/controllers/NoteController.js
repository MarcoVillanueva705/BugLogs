import express from "express";
import noteService from "../services/NoteService";
import bugService from "../services/BugService";``
import { Authorize } from '../middleware/authorize.js'

export default class NoteController {
  constructor() {
    this.router = express
      .Router({ mergeParams: true })
      .use(Authorize.authenticated) 
      //NOTE  each route gets registered as a .get, .post, .put, or .delete, the first parameter of each method is a string to be concatinated onto the base url registered with the route in main. The second parameter is the method that will be run when this route is hit.
      // .get("", this.getAll)
      // .get("/:id", this.getById)
      .post("", this.createNote) //api/notes
      .delete("/:id", this.deleteNote)
      .use(this.defaultRoute)
      //FIXME add delete route and method FIXED!
  }

   // this is pretty neat
   defaultRoute(req, res, next) {
    next({ status: 404, message: 'No Such Route' })
  }

  // async getAll(req, res, next) {
  //   try {
  //     let data = await noteService.getAll();
  //     return res.send(data);
  //   } catch (error) {
  //     next(error);
  //   }
  // }
  // async getById(req, res, next) {
  //   try {
  //     let data = await noteService.getById(req.params.id);
  //     return res.send(data);
  //   } catch (error) {
  //     next(error);
  //   }
  // }
async createNote(req, res, next) {

    try {
      let data = await noteService.createNote(req.body);
      return res.status(201).send(data);
    } catch (error) {
      next(error);
    }
  }

  async deleteNote(req, res, next) {
    try {
      await noteService.deleteNote(req.params.id);
      return res.send("Successfully Deleted");
    } catch (error) {
      next(error);
    }
  }

  // async edit(req, res, next) {
  //   try {
  //     let data = await noteService.edit(req.params.id);
  //     return res.send(data);
  //   }catch (error) {
  //     next(error);
  //   }
  // }
}

