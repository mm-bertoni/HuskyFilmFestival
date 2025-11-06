# HuskyFilmFestival

## Authors
Margaret Bertoni, Utkarsh Dev

## Class Link


## Project Objective


## Screenshot

<!-- Add a screenshot at the path above or update the path to point to your image. -->

## Tools used
- React (frontend) 
- Node.js (backend)
- Express (server)
- MongoDB (database)
- nodemon (dev)
- ESLint, Prettier (code quality/formatting)

## Project Structure
- backend.js                 - main Express server (entry)
- package.json               - project metadata & scripts
- node_modules/              - installed packages
- public/ or client/         - frontend assets (Created by React)
- screenshots/               
- README.md                  
(Adjust paths if your repo organizes differently.)

## Instructions to build =
Prerequisites:
- Node.js (v18+ recommended)
- npm
- MongoDB running locally or a cloud URI

1. Clone the repo and open the project folder:
   - git clone <repo-url>
   - cd HuskyFilmFestival

2. Install dependencies:
   - npm install

3. Configure environment:
   - Set MONGO_URI (e.g. export MONGO_URI="mongodb://localhost:27017/huskyfilm")
   - Optionally create a .env file and load it in your backend if implemented.

4. Start the backend server (uses nodemon):
   - npm start
   - By default this runs nodemon and watches backend.js; visit http://localhost:3000 (or the port your backend uses).

5. Frontend :
   - cd frontend
   - npm install
   - For production build: npm run build (then serve the build folder with a static server)
   - For dev build: npm run dev



Notes:
- If your server uses a different port or script, update the commands accordingly.
- Ensure MongoDB is reachable using the MONGO_URI you configured.

## AI Usage
This README was created/edited with assistance from GitHub Copilot (GPT-5 mini)
