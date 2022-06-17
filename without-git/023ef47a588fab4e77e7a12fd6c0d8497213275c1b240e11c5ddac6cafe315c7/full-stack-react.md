
I recently built a single-page application that interacts with a backend JSON API server. I chose to use React to deepen my understanding of React fundamentals and how each tool can help in building a scalable frontend.

The stack of this application consists of:

-   Frontend with React/Redux
-   A backend JSON API server with Sinatra, integrated with Postgres for database persistence
-   An API client that fetches data from [OMDb API](http://www.omdbapi.com/), written in Ruby

For this post, we’ll assume that we have the backend completed. So let’s focus on how design decisions are made on the frontend.

> Side note: The decisions presented here are for reference only and may vary depending on the needs of your application. An example OMDb Movie Tracker app is used here for demonstration.

The application consists of a search input form. A user can input a movie title to return a movie result from [OMDb](http://www.omdbapi.com/). The user can also save a movie with a rating and short comment into a favorites list.

**To view the final app,** [**click here**](https://omdb-tracker.herokuapp.com/)**.** To view the source code, click [here](https://github.com/YingCGooi/omdb-tracker/tree/master/public/js).

When a user searches a movie on the homepage, it looks like this:

![](https://miro.medium.com/max/60/1*wgeOmDDHG9NhmnY_X7h_Tg.png?q=20)

![](https://miro.medium.com/max/1400/1*wgeOmDDHG9NhmnY_X7h_Tg.png)

The UI contains a search input form and a movie result below it.

For the sake of simplicity, we’ll only focus on designing the core features of the application in this article. You can also skip to [**Part II: Redux**](https://medium.com/p/d6eaf235f4d) of the series.

Defining appropriate data structures should be one of the most important aspects of designing an app. This should come as the first step, as it determines not only how the frontend should render the elements, but also how the API server should return the JSON responses.

For this app, we’ll need two main pieces of information to properly render our UI: **a single movie result** and **a list of favorited movies**.

## Movie result object

A single movie result will contain information such as the title, year, description, and poster image. With this, we need to define an object that can store these attributes:

{  
  "title": "Star Wars: Episode IV - A New Hope",  
  "year": "1977",  
  "plot": "Luke Skywalker joins forces with a Jedi Knight...",  
  "poster": "[https://m.media-amazon.com/path/to/poster.jpg](https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg)",  
  "imdbID": "tt0076759"  
}

The `poster` property is simply a URL to the poster image that will be displayed in the results. If there’s no poster available for that movie, it will be “N/A”, which we will display a placeholder. We will also need an `imdbID` attribute to uniquely identify each movie. This is useful for determining whether or not a movie result already exists in the favorites list. We’ll explore later on how it works.

## Favorites list

The favorites list will contain all of the movies saved as favorites. The list will look something like this:

![](https://miro.medium.com/max/1400/1*K3aTdmMg7NSQv-XD1ngE1Q.png)

Each movie also includes additional favorite information (rating and comment)

\[  
  { title: "Star Wars", year: "1977", ..., rating: 4 },  
  { title: "Avatar", year: "2009", ..., rating: 5 }  
\]

Keep in mind that we’ll need to look up a specific movie from the list, and the time complexity for this approach is **O(N)**. While it works fine for smaller datasets, imagine having to search for a movie in a favorites list that grows indefinitely.

With this in mind, I chose to go with a hash table with keys as `imdbID` and values as favorited movie objects:

{  
  tt0076759: {  
    title: "Star Wars: Episode IV - A New Hope",  
    year: "1977",  
    plot: "...",  
    poster: "...",  
    rating: "4",  
    comment: "May the force be with you!",  
  },  
  tt0499549: {  
    title: "Avatar",  
    year: "2009",  
    plot: "...",  
    poster: "...",  
    rating: "5",  
    comment: "Favorite movie!",  
  }  
}

With this, we can look up a movie in the favorites list in **O(1)** time by its `imdbID`.

> Note: the runtime complexity is probably not going to matter in most cases since the datasets are usually small on the client-side. We are also going to perform slicing and copying (also O(N) operations) in Redux anyway. But as an engineer, it’s good to be aware of potential optimizations that we can perform.

Components are at the heart of React. We’ll need to determine which ones that will interact with the Redux store, and which ones that are only for presentation. We can also reuse some of the presentational components too. Our component hierarchy will look something like this:

![](https://miro.medium.com/max/1000/1*2STXDPsx45h_DLDbHNdaGQ.png)

## Main page

We designate our **App** component at the top level. When the root path is visited, it needs to render the **SearchContainer**. It also needs to display flash messages to the user and handle the client-side routing.

The **SearchContainer** will retrieve the movie result from our Redux store, providing information as props to **MovieItem** for rendering. It will also dispatch a search action when a user submits a search in **SearchInputForm**. More on Redux later.

![](https://miro.medium.com/max/1000/1*btFjf2nJPs-NSwrkpSA7ew.png)

A modal that allows users to add a rating and comment when saving a favorite.

## Add To Favorites Form

When the user clicks on the “Add To Favorites” button, we will display the **AddFavoriteForm**, a [controlled component](https://reactjs.org/docs/forms.html).

We are constantly updating its state whenever a user changes the rating or input text in the comment text area. This is useful for validation upon form submission.

The **RatingForm** is responsible to render the yellow stars when the user clicks on them. It also informs the current rating value to **AddFavoriteForm**.

![](https://miro.medium.com/max/1000/1*T0aB1Q7lhwOOq5oMJN-fYA.png)

The FavoritesContainer contains a list of MovieItem components

## Favorites Tab

When a user clicks on the “Favorites” tab, the **App** renders **FavoritesContainer**.

The **FavoritesContainer** is responsible for retrieving the favorites list from the Redux store. It also dispatches actions when a user changes a rating or clicks on the “Remove” button.

Our **MovieItem** and **FavoritesInfo** are simply presentational components that receive props from **FavoritesContainer**.

We’ll reuse the **RatingForm** component here. When a user clicks on a star in the **RatingForm**, the **FavoritesContainer** receives the rating value and dispatches an update rating action to the Redux store.

Our frontend API client should be kept simple: it should only perform asynchronous requests to our backend API server and return the appropriate responses for consumption.

## Search Endpoint

Our backend API server provides the following endpoint to search for a single movie result:

-   **GET** `**/api/search**` — Accepts a single `title` query parameter. Upon success, returns a JSON movie object.

## Favorites Endpoints

Our API server provides the following endpoints to perform CRUD operations on the favorites list:

-   **GET** `**/api/favorites**` — Retrieve all favorited movies.
-   **POST** `**/api/favorites**` — Save a movie into the favorites list. Payload is a single movie object.
-   **PATCH** `**/api/favorites/:imdbID**` — Update a favorite’s rating. Payload is an object with a rating attribute.
-   **DELETE** `**/api/favorites/:imdbID**` — Remove a movie from the favorites list.

> Note: PATCH is used here instead of PUT since we are only performing a partial update. You can read more about PUT vs PATCH [here](https://stackoverflow.com/questions/28459418/rest-api-put-vs-patch-with-real-life-examples).

## **Making Asynchronous Requests**

Between the Fetch API, XMLHttpRequest and other wrapper libraries, I use [Axios](https://github.com/axios/axios). It provides a short syntax for making HTTP requests and a Promise interface.

![](https://miro.medium.com/max/1400/1*ARCxJgrIc73AllZ9sxej4w.png)

To implement our API client, we first initialize the URL constants for making the HTTP requests:

//**apiClient.js**const SEARCH\_URL = (title) => '/api/search?title=' + title;  
const FAVORITES\_URL = '/api/favorites';  
const FAVORITE\_URL = (imdbID) => '/api/favorites/' + imdbID;

The **SEARCH\_URL** and **FAVORITE\_URL** constants are functions that allow us to pass in relevant parameters. The URLs are based on our API endpoints.

Then, we initialize an `apiClient` object and define methods that correspond to the HTTP requests:

//**apiClient.js  
**import axios from 'axios';...const apiClient = {  
  **query**(title) {  
    title = **encodeURIComponent**(title);  
    return axios.get(SEARCH\_URL(title));  
  }, **saveFavorite**(movie) {  
    return axios.post(FAVORITES\_URL, movie);  
  }, **getAllFavorites**() {  
    return axios.get(FAVORITES\_URL);  
  }, **updateRating**(imdbID, value) {  
    return axios.patch(FAVORITE\_URL(imdbID), {  
      rating: value,  
    });  
  }, **deleteFavorite**(imdbID) {  
    return axios.delete(FAVORITE\_URL(imdbID));  
  },  
}export default apiClient;

> Note that we encode the search title string. This is because we are including it as part of the URL query parameter when making a GET request to `/api/search` . The [**encodeURIComponent**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent) method converts spaces and certain symbols to escape sequences.
