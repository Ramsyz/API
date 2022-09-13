import express from "express";
import bodyParser from "body-parser";

import employeesRoutes from "./routes/employees.js";

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.use("/employees", employeesRoutes);

app.get("/", (req, res) => {
	res.send("Hello");
});

app.listen(PORT, () =>
	console.log(`Server running on port: http://localhost:${PORT}`)
);
