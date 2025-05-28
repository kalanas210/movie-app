# MovieHub - React Movie Application

A modern React application for browsing and searching movies using the TMDB API.

## Features

- Browse popular movies
- Search for movies
- Responsive design
- Infinite scroll loading
- Movie details including release date and rating

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- TMDB API key (get it from [TMDB website](https://www.themoviedb.org/documentation/api))

## Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the root directory and add your TMDB API key:
   ```
   VITE_TMDB_API_KEY=your_tmdb_api_key_here
   ```

## Development

To start the development server:

```bash
npm run dev
```

## Build

To build for production:

```bash
npm run build
```

## Technologies Used

- React
- Vite
- TailwindCSS
- Axios
- TMDB API

## License

MIT
