# MovieHub

<p align="left">
  <img src="https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react" alt="React" />
  <img src="https://img.shields.io/badge/Vite-6-purple?style=for-the-badge&logo=vite" alt="Vite" />
  <img src="https://img.shields.io/badge/Tailwind%20CSS-4-06B6D4?style=for-the-badge&logo=tailwindcss" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/React%20Router-7-CA4245?style=for-the-badge&logo=react-router" alt="React Router" />
  <img src="https://img.shields.io/badge/TMDB%20API-Integration-01B4E4?style=for-the-badge&logo=themoviedb" alt="TMDB API" />
</p>

> A modern, responsive, and fast movie discovery application built to showcase smooth UI/UX and efficient API integration.

MovieHub allows users to browse popular movies, search for specific titles, and view detailed information about each movie. It leverages the TMDB (The Movie Database) API to fetch real-time data and presents it in a sleek, dark-themed interface.

## ✨ Features

- **Real-time Search:** Instantly search for movies using the TMDB API.
- **Infinite Scrolling / Pagination:** Seamlessly load more movies as you browse.
- **Detailed Movie Views:** View posters, ratings, release dates, genres, and overviews.
- **Responsive Design:** Fully optimized for mobile, tablet, and desktop screens using Tailwind CSS.
- **Modern Tech Stack:** Built with React 19, Vite, and React Router v7 for optimal performance.

## 🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine.

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/movie-app.git
   cd movie-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory based on the provided `.env.example`:
   ```bash
   cp .env.example .env
   ```
   Open the `.env` file and add your TMDB Read Access Token (v4 API Key):
   ```env
   VITE_TMDB_API_KEY=your_tmdb_read_access_token_here
   ```
   *(You can get a free API key by creating an account at [TMDB](https://www.themoviedb.org/))*

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open the app**
   Visit `http://localhost:5173` in your browser.

## 📁 Folder Structure

```text
src/
├── components/     # Reusable UI components (Navbar, MovieCard)
├── context/        # React Context providers (SearchContext)
├── pages/          # Page components (HomePage, MovieDetails)
├── services/       # API integration logic (movieApi.js)
├── App.jsx         # Main application routing
└── main.jsx        # Entry point
```

## 🛠️ Built With

- [React](https://reactjs.org/) - UI Library
- [Vite](https://vitejs.dev/) - Frontend Tooling
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [React Router](https://reactrouter.com/) - Routing
- [Axios](https://axios-http.com/) - HTTP Client
- [TMDB API](https://developer.themoviedb.org/docs) - Movie Data API
