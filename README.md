# Junior Fullstack Developer Exam

Welcome to my repository for the Junior Fullstack Exam. This web application is built using the following technologies:

- **Backend**: Python, FastAPI, Python Dictionary
- **Frontend**: React.js, Bootstrap
- **Utilities**: fastapi-cors, uvicorn, react-router-dom, python-jose

## Prerequisites
Make sure you have the following software installed on your computer before starting the project:
- [Python](https://www.python.org/)
- [NPM](https://nodejs.org/en/download/package-manager)


## Setup Instructions
1. **Clone the repository:**
```
git clone https://github.com/PandesalPanpan/jr-fullstack-exam.git
```
2. **Navigate to the Project Directory:**
```
cd jr-fullstack-exam
```
❗ **You will need two terminals to run backend and frontend**
### Running Backend
1. **Navigate to the Backend**
```
cd backend
```
2. **Active Virtual Environment & Install Dependencies**
```
.\venv\Scripts\activate
pip install -r requirements.txt
```
2. **Start Backend**
```
fastapi dev main.py
```
If the "Serving at" is not running on the port 8000. You will have to match frontend apiBaseUrl at `config.js`
- [If you have backend running locally, access deployed frontend](https://jr-fullstack-exam.vercel.app/)

### Running Frontend
❗ Start another terminal within the project directory
1. **Navigate to the Frontend**
```
cd frontend
```
2. **Install Dependencies**
```
npm install
```
3. **Start Frontend**
```
npm start
```

## Explanation of my Approach
The project structure in frontend is designed to maintain organization amd modularity

- **components/**: Contains reusable react components that is inserted it pages
- **hooks/**: Contains functions that add functionality to React components.
- **pages/**: Includes React view pages, which are routed to using React Router and built using components.
- **utils/**: Contains `auth.js` & `validation.js` files, as helper modules that are used by multiple components.

I implemented basic authentication with login and logout functionality using JSON Web Token. The user accounts are stored in auth.py as follows:
```
users_db = {
    'user1': 'password1',
    'user2': 'password2'
}
```

You can also access the frontend on Vercel. However, I couldn't deploy the backend on Heroku due to the requirement of a credit card. As a result, the frontend on Vercel will only work if the backend is running locally at `localhost:8000`.
- [If you have backend running locally, access deployed frontend](https://jr-fullstack-exam.vercel.app/)

I have not included comments in the code, as I believe that clear naming conventions for files, functions, and variables serve as effective documentation, with exceptions made only for complex code that requires further abstraction. Prettier Code Formatter is used for consistent formatting.
