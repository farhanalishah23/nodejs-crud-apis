import express from "express"
import {fetch , create, update, deleteUser} from "../Controllers/userController.js";

const route = express.Router()


route.post("/create" , create)
route.put("/update/:id" , update)
route.delete("/delete/:id" , deleteUser)
route.get("/fetch" , fetch)


export default route