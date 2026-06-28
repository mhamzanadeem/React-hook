# React Hook Projects

A collection of small React + Vite projects built to practice React fundamentals, hooks, component state, API calls, routing, conditional rendering, and reusable UI patterns.

Each folder is an independent app with its own `package.json`, dependencies, Vite config, and source files. You can install and run any project separately.

---
## 🚀 Live Demos

> Deployed on **Vercel** — click any badge to open the live app instantly.

| &nbsp; | Project | Stack | Live |
| :---: | --- | --- | :---: |
| 🌤️ | **Weather App** | React · OpenWeather API | [![Live Demo](https://img.shields.io/badge/View%20Demo-Weather%20App-4f86f7?style=for-the-badge&logo=vercel&logoColor=white)](https://react-hook-9nbrv8gv6-mhamzanadeems-projects.vercel.app/) |
| 🍽️ | **Food Recipe App** | React · Forkify API · React Router | [![Live Demo](https://img.shields.io/badge/View%20Demo-Food%20Recipe-f97316?style=for-the-badge&logo=vercel&logoColor=white)](https://react-hook-ay6g-am0nh029a-mhamzanadeems-projects.vercel.app/) |

---

## Projects

| Project | Folder | Description |
| --- | --- | --- |
| Accordion | `accordian` | Collapsible FAQ-style accordion with single-selection and multi-selection modes. |
| Random Color Generator | `random-color-generator` | Generates random HEX and RGB colors with a live preview. |
| Star Rating | `star rating` | Interactive star rating component with hover preview, selected state, and reset action. |
| GitHub Profile Finder | `github-profile-finder` | Searches GitHub users and displays profile details from the GitHub API. |
| Food Recipe | `food recipe` | Recipe search app using Forkify API, React Router pages, recipe details, and favorites. |
| Weather App | `weather app` | Live city weather search using OpenWeather API with temperature, humidity, and wind data. |

## Tech Stack

- React
- Vite
- JavaScript
- Tailwind CSS
- ESLint
- React Router DOM, used in the Food Recipe app
- Public APIs: GitHub API, Forkify API, and OpenWeather API

## Repository Structure

```text
React Hook/
├── accordian/
├── food recipe/
├── github-profile-finder/
├── random-color-generator/
├── star rating/
├── weather app/
└── README.md
```

Every app follows a similar Vite structure:

```text
project-folder/
├── src/
│   ├── components/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
└── eslint.config.js
```

Some projects include extra folders such as `pages`, `context`, or `data` depending on the app.

## Prerequisites

Make sure you have the following installed:

- Node.js
- npm

Check your versions:

```bash
node --version
npm --version
```

## Getting Started

Clone the repository:

```bash
git clone <your-repository-url>
cd "React Hook"
```

Choose a project and install dependencies inside that project folder:

```bash
cd accordian
npm install
npm run dev
```

Vite will start a local development server and print a URL similar to:

```text
http://localhost:5173/
```

## Running Each App

Because each app is independent, run commands from inside the app folder.

### Accordion

```bash
cd "accordian"
npm install
npm run dev
```

Features:

- Single accordion item selection
- Optional multi-selection mode
- Local static data source
- Responsive UI

### Random Color Generator

```bash
cd "random-color-generator"
npm install
npm run dev
```

Features:

- Generate random HEX colors
- Generate random RGB colors
- Toggle between color modes
- Live color preview

### Star Rating

```bash
cd "star rating"
npm install
npm run dev
```

Features:

- Hover-based rating preview
- Click to select a rating
- Reset selected rating
- Configurable star count through component props

### GitHub Profile Finder

```bash
cd "github-profile-finder"
npm install
npm run dev
```

Features:

- Search by GitHub username
- Fetches data from `https://api.github.com/users/:username`
- Displays avatar, name, username, join date, public repositories, followers, and following count
- Links to the user's GitHub profile

### Food Recipe

```bash
cd "food recipe"
npm install
npm run dev
```

Features:

- Search recipes using the Forkify API
- View recipe cards with image, title, and publisher
- Open recipe detail pages
- View ingredients
- Add and remove recipes from favorites
- Client-side routing with React Router
- Global state management with React Context

Routes:

| Route | Page |
| --- | --- |
| `/` | Home and recipe search results |
| `/favorites` | Favorite recipes |
| `/recipe-item/:id` | Recipe details |

### Weather App

```bash
cd "weather app"
npm install
npm run dev
```

Features:

- Search weather by city
- Default city: Islamabad
- Shows current temperature in Celsius
- Shows weather description, humidity, and wind speed
- Handles loading and API error states

The Weather App requires an OpenWeather API key.

Create a `.env` file inside the `weather app` folder:

```bash
VITE_API_KEY=your_openweather_api_key_here
```

Restart the dev server after adding or changing the `.env` file.

You can get an API key from OpenWeather:

```text
https://openweathermap.org/api
```

## Available Scripts

Each project includes the same main npm scripts:

```bash
npm run dev
```

Starts the Vite development server.

```bash
npm run build
```

Creates a production build in the `dist` folder.

```bash
npm run preview
```

Serves the production build locally for preview.

```bash
npm run lint
```

Runs ESLint on the project files.

## Build A Project

From inside any app folder:

```bash
npm run build
```

Example:

```bash
cd "github-profile-finder"
npm run build
```

## Environment Variables

Only the Weather App needs an environment variable.

| Project | Variable | Required | Purpose |
| --- | --- | --- | --- |
| `weather app` | `VITE_API_KEY` | Yes | OpenWeather API key |

Do not commit `.env` files. The Weather App `.gitignore` already ignores `.env`.

## API References

- GitHub Users API: `https://api.github.com/users/{username}`
- Forkify API: `https://forkify-api.herokuapp.com/api/v2/recipes`
- OpenWeather Current Weather API: `https://api.openweathermap.org/data/2.5/weather`

## Learning Goals

This repository practices:

- `useState` for local UI state
- `useEffect` for initial API calls and side effects
- Controlled form inputs
- Conditional rendering
- Component composition
- Passing props between components
- Fetching data from APIs
- Handling loading and error states
- React Context for shared state
- React Router for multi-page app flows
- Styling responsive interfaces with Tailwind CSS

## Notes

- Folder names contain spaces in some projects, so wrap those paths in quotes when using the terminal.
- Each project has its own dependencies, so run `npm install` inside the project you want to use.
- API-based apps require internet access while running locally.

## Author

Created by Muhammad Hamza Nadeem.
