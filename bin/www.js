"use strict";

const app = require("../web")
const PORT = 3000;

app.listen(PORT, () => {
	console.log('localhost:',PORT);
});