import express from "express";
import { v4 as uuidv4 } from "uuid";

const router = express.Router();

let employees = [];

//routes start with users
router.get("/", (req, res) => {
	console.log(employees);
	res.send(employees);
});

router.post("/", (req, res) => {
	const employee = req.body;

	employees.push({ ...employee, id: uuidv4() });

	res.send(` Employee with the name ${employee.lastName} added to db`);
});

router.get("/:id", (req, res) => {
	const { id } = req.params;

	const foundEmployee = employees.find((employee) => employee.id === id);
	res.send(foundEmployee);
});

router.delete("/:id", (req, res) => {
	const { id } = req.params;

	employees = employees.filter((employee) => employee.id !== id);
	res.send(`employee with id ${id} deleted successfully`);
});

router.patch("/:id", (req, res) => {
	const { id } = req.params;
	const { firstName, lastName, company } = req.body;

	const employee = employees.find((employee) => employee.id === id);

	if (firstName) employee.firstName = firstName;
	if (lastName) employee.lastName = lastName;
	if (company) employee.company = company;

	res.send(`Employee with id ${id} has been updated`);
});

export default router;
