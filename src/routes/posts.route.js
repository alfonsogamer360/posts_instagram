import { Router } from "express";
import { controllerPosts } from "../controllers/post.controller.js";

export const routerPosts = Router()

routerPosts.get("/", controllerPosts.getAll)
routerPosts.get("/:id", controllerPosts.getById)
routerPosts.post("/", controllerPosts.create)
routerPosts.delete("/:id", controllerPosts.delete)
routerPosts.put("/:id", controllerPosts.updatePut)