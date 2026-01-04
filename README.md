# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

ABOUT THE PROJECT
MERN To-Do App

A full-stack To-Do List application built with the MERN stack (MongoDB, Express, React, Node.js).
Users can add, delete, and mark tasks as completed, with priority levels and filtering functionality.
The app features a modern UI with gradient background, cards, and responsive layout.

🌟 Features

Add tasks with priority (High, Medium, Low)

Mark tasks as completed

Delete tasks

Filter tasks: All, Active, Completed

Clear and modern UI

Fully functional MERN stack project

Stores tasks in MongoDB

📁 Project Structure
mern-todo/
├─ backend/
│  ├─ server.js           # Express server and API routes
│  ├─ package.json        # Backend dependencies
├─ frontend/
│  ├─ src/
│  │  ├─ App.js           # Main React component with all subcomponents
│  │  ├─ App.css          # Styling for the frontend
│  ├─ package.json        # Frontend dependencies
├─ README.md

⚙️ Technologies Used

Frontend: React, Axios, CSS3

Backend: Node.js, Express.js

Database: MongoDB (local or Atlas)

Other Libraries: cors, mongoose

🚀 Installation
1. Clone the repository
git clone <your-repo-url>
cd mern-todo

2. Setup Backend
cd backend
npm install


Make sure MongoDB is running locally:

mongod


Start the server:

node server.js


The backend runs at:

http://localhost:5000

3. Setup Frontend

Open a new terminal:

cd frontend
npm install
npm start


The frontend runs at:

http://localhost:3000

🛠 API Endpoints
Method	Endpoint	Description
GET	/todos	Get all todos
POST	/todos	Create a new todo
PATCH	/todos/:id	Toggle completed status
DELETE	/todos/:id	Delete a todo

POST Body Example:

{
  "task": "Finish homework",
  "priority": "High"
}

🎨 UI/UX

Gradient background with modern card layout

Tasks displayed in card-style list items

Color-coded priority badges:

High → Red

Medium → Yellow

Low → Green

Filter buttons to switch between All, Active, Completed tasks

💡 Future Improvements

Dark/Light mode toggle

Drag-and-drop for task reordering

User authentication (login/signup)

Task deadlines and notifications

👨‍💻 Author

Aviral Gandhi
