# Tv Series search
## a Next.js application built with TypeScript and Redux Toolkit.
## The application allows users to search for TV shows, view search results, and select a TV show to view more details.

# Installation
## To run this application,
## first clone the repository and navigate to the project directory.
## Then, install the dependencies by running: `npm install`

# Running the Application
## To start the development server, run: `npm run dev`
## Then, open `http://localhost:3000` in your browser to view the application.

# Code Structure
## pages/index.tsx: The main page component that renders the search screen.
## components/search-bar.tsx: A component that renders a search bar.
## components/search-screen.tsx: A component that renders the search screen and handles user input.
## components/tv-show-details.tsx: A component that renders the details for a selected TV show.
## components/tv-show-item.tsx: A component that renders an individual TV show item.
## components/tv-show-items.tsx: A component that renders a list of TV show items.
## components/tv-show-list.tsx: A component that renders a list of TV shows based on a search query.
## redux/store.ts: A file that exports the Redux store, along with utility functions for working with the store.
## redux/tvShows/tvShowsApi.ts: A file that defines an asynchronous Redux action for searching for TV shows.
## redux/tvShows/tvShowsSlice.ts: A file that defines a Redux slice for managing TV shows, including the tvShows array, status, and error properties.
## redux/tvShows/tvShowsTypes.ts: A file that defines the types used in the Redux store for managing TV shows.

# Dependencies
## This application uses the following dependencies:

## Next.js
## React
## Redux Toolkit
## Axios
## TypeScript
