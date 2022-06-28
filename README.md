# PokéRadar

Web app that allows users to track Pokémon cards they want to collect.

![pokeradar demo](https://user-images.githubusercontent.com/57423395/176061663-09ac84f7-a5bc-4c64-b5d9-1796dd3872bf.gif)

### Dependencies

* react
* reduxjs/toolkit
* react-router-dom
* react-toastify
* bcrypt
* dotenv
* mongodb
* mongoose
* pokemontcgsdk
* jsonwebtoken
* cors
* express
* body-parser

### Dev-dependencies
* nodemon

### Prerequisites
* Node.js must be installed on the system.
* You should have a MongoDB database.
* You should have a code editor (preferred: VS Code)

### Installation and Setup

1. Download the source code in your desired location on your system.

2. Open the code in your code editor.

3. Go to terminal and type the following command and hit enter:
``` npm run install-all```
This will install all the dependencies and dev-dependencies required at root, at frontend and at backend in your project.

4. Create a file named ".env" inside the backend folder and add data from .env.example file and substitute your credentials there.

5. Go to terminal and type the following command and hit enter:
```npm run dev```
This will start both backend and frontend.

6. Open browser and go to url: http://localhost:3000. You can see the app running now.

## Help

This is my first React project so there are a few bugs that ended up in the final code due to me building the foundation of the app with very limited knowledge.

* If you add a card to favorites, the favorites button won't stay red until you refresh the page.
* Sometimes upon logout, the page will not redirect to the Login page.
* If you add several favorites at once and then try to access the favorites via the sidemenu, it will not load. Simply click on the PokeRadar logo in the sidemenu and   then click on Favorites in the sidemenu and it will display your favorites.

