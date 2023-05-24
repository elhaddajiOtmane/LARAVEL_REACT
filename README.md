<!DOCTYPE html>
<html>
<head>
	<title>LARACT</title>
</head>
<body>
	<h1>LARACT</h1>
	<p>LARACT is a web application built with Laravel and React.js that provides a CRUD API for managing data. This application can be used as a starting point for building web applications that require a backend API and a frontend UI.</p>

	<h2>Requirements</h2>
	<ul>
		<li>PHP 8.0 or later</li>
		<li>MySQL or another supported database</li>
		<li>Node.js and npm</li>
		<li>React.js</li>
	</ul>

	<h2>Installation</h2>
	<ol>
		<li>Clone the repository: <code>git clone https://github.com/elhaddajiOtmane/LARAVEL_REACT.git</code></li>
		<li>Install dependencies: <code>composer install</code> and <code>npm install</code></li>
		<li>Create a copy of the <code>.env.example</code> file and rename it to <code>.env</code>: <code>cp .env.example .env</code></li>
		<li>Generate an application key: <code>php artisan key:generate</code></li>
		<li>Update thedatabase configuration in the `.env` file</li>
		<li>Run database migrations: <code>php artisan migrate</code></li>
		<li>Start the development server: <code>php artisan serve</code> and <code>npm run start</code></li>
	</ol>

	<h2>Usage</h2>
	<p>The API provides endpoints for creating, reading, updating, and deleting records. The endpoints are:</p>
	<ul>
		<li><code>GET /api/items</code>: Get a list of all items</li>
		<li><code>GET /api/items/{id}</code>: Get a single item by ID</li>
		<li><code>POST /api/items</code>: Create a new item</li>
		<li><code>PUT /api/items/{id}</code>: Update an item by ID</li>
		<li><code>DELETE /api/items/{id}</code>: Delete an item by ID</li>
	</ul>

	<p>To use the API, you can send requests to these endpoints using a tool such as Postman or cURL. The responses will be in JSON format.</p>

	<p>The frontend UI is built with React.js and communicates with the backend API using Axios. To start the frontend UI, run <code>npm run start</code> in the project directory. The UI provides a simple interface for managing items,including a form for creating new items and a table for viewing and editing existing items.</p>

	<h2>Contributing</h2>
	<p>Contributions to this project are welcome. If you find a bug or have a feature request, please create an issue on the GitHub repository.</p>

	<h2>License</h2>
	<p>This project is licensed under the MIT License - see the <code>LICENSE.md</code> file for details.</p>

	<h2>Credits</h2>
	<p>This project was created by elhaddaji otmane. Special thanks to the Laravel and React.js communities for their contributions and support.</p>
</body>
</html>
