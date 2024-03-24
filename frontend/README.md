# React Calculator Application

This is a simple React application that implements a calculator with both frontend and backend functionalities. The application consists of several components and utilizes React Router for navigation and Axios for making HTTP requests to the backend server.

## Components

### 1. Main.jsx
- Entry point of the application.
- Renders the `Router` component from `react-router-dom`, which handles navigation.
- Mounts the `App` component inside the router.

### 2. App.jsx
- Contains the main structure of the application.
- Renders a `Navbar` component and utilizes `Routes` from `react-router-dom` to define routes for different components.
- Routes:
  - `/`: Renders the `Profile` component.
  - `/calculator`: Renders the `MainApp` component.

### 3. Profile.jsx
- Represents the user profile page.
- Utilizes local storage to store and retrieve user name and description.
- Renders the `ProfileDetails` component.

### 4. ProfileDetails.jsx
- Displays user profile details, including name and description.
- Allows users to update their name and description.

### 5. MainApp.jsx
- Represents the main application page for the calculator.
- Utilizes `useState` hook to manage state for input fields and result.
- Implements frontend addition functionality.
- Makes an HTTP POST request to the backend server for backend addition functionality.

### 6. Calculator.jsx
- Displays the calculator interface.
- Allows users to input two numbers and submit for addition.
- Displays both frontend and backend addition results.

### 7. Navbar.jsx
- Represents the navigation bar.
- Contains links to navigate between the profile and calculator pages.

### 8. server.jsx
- Backend server implemented using Express.js.
- Defines a route `/add` for handling addition requests.
- Validates input parameters and performs addition.
- Implements error handling middleware.

## How it Works

1. When the application is launched, the user is presented with a navigation bar containing links to the profile and calculator pages.
2. The profile page allows users to view and update their profile details such as name and description. Changes are stored in local storage.
3. The calculator page provides input fields to enter two numbers and a button to submit for addition.
4. Upon submission, the frontend calculates the addition result and displays it immediately. Simultaneously, it sends a request to the backend server to perform the addition operation.
5. The backend server receives the request, validates the input, performs the addition, and returns the result.
6. The frontend updates the UI with the backend addition result received from the server.

## Setup Instructions

1. Clone the repository.
2. Navigate to the project directory in your terminal.
3. Enter the frontend development server by running `cd frontend`
4. Install dependencies by running `npm install`.
5. Start the frontend development server by running `npm run dev`.
6. Enter the backend server by running  `cd ..\backend`
7. Install dependencies by running `npm install`.
7. Start the backend server by running `node server.js`.
8. Access the application in your web browser at `http://localhost:5173`.
   