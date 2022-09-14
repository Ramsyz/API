import express from "express";

import {
	createEmployee,
	getEmployees,
	getEmployee,
	deleteEmployee,
	updateEmployee,
} from "../controllers/employees.js";

const router = express.Router();

//routes start with employees
router.get("/", getEmployees);

router.post("/", createEmployee);

router.get("/:id", getEmployee);

router.delete("/:id", deleteEmployee);

router.patch("/:id", updateEmployee);

export default router;
