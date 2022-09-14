import { v4 as uuidv4 } from "uuid";

let employees = [];

export const getEmployees = (req, res) => {
	res.send(employees);
};

export const createEmployee = (req, res) => {
	const employee = req.body;

	employees.push({ ...employee, id: uuidv4() });

	res.send(` Employee with the name ${employee.lastName} added to db`);
};

export const getEmployee = (req, res) => {
	const { id } = req.params;

	const foundEmployee = employees.find((employee) => employee.id === id);
	res.send(foundEmployee);
};

export const deleteEmployee = (req, res) => {
	const { id } = req.params;

	employees = employees.filter((employee) => employee.id !== id);
	res.send(`employee with id ${id} deleted successfully`);
};

export const updateEmployee = (req, res) => {
	const { id } = req.params;
	const { firstName, lastName, company } = req.body;

	const employee = employees.find((employee) => employee.id === id);

	if (firstName) employee.firstName = firstName;
	if (lastName) employee.lastName = lastName;
	if (company) employee.company = company;

	res.send(`Employee with id ${id} has been updated`);
};
