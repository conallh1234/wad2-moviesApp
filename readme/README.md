# Assignment 1 - ReactJS app.

Name: Conall Heffernan

## Features.

 
 + Trending Movies - Displays trending movies from an API fetch
 + Upcoming Movies - Displays Upcoming movies from an API fetch
 + People = Displays a list of popular actors with their popularity rating
 + People Filter = Allows user to filter actors by name 


## API Data Model.


+ https://api.themoviedb.org/3/movie/${id} - get detailed information on a specific movie. 
+ https://api.themoviedb.org/3/genre/movie/list - get a list of movie genres
+ https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1
+ https://api.themoviedb.org/3/trending/movie/week?api_key=${key}
+ https://api.themoviedb.org/3/movie/${id}/credits?api_key=${key}&language=en-US = returms credits for a movie, which cast and crew can be derived from
+ https://api.themoviedb.org/3/person/popular?api_key=${key}&language=en-US&page=1 = returns a list of popular actors
+ https://api.themoviedb.org/3/person/${id}?api_key=${key}&language=en-US = gets a specific person

## App Design.

### Component catalogue (If required).


![][stories]

### UI Design.

...... Insert screenshots of the new/modified views you have added to the Movies Fan app. Include a caption for each one clearly stating its purpose and any user interaction it supports ........

![][movieActors]
>Shows detailed information on a movie. Clicking the 'Show Reviews' button will display extracts from critic reviews.

![][review]
>Shows the full text for a movie review. 

## Routing.

...... Insert a list of the additional routes supported by your Movies Fan app. If relevant, specify which of the routes require authentication, i.e. protected/private.

+ /movies/favorites (protected) - displays the user's favorite movies selection.
+ /reviews/:id (public) - displays the full text of a movie review.
+ /reviews/form (public) - allows a user to submit their own review
+ /movies/upcoming (public) - displaying upcoming movies which users can add to their watch list
+ /movies/trending (public) - displays currently trending movies which users can add to favourites as in discover
+ /movies/watchlist (protected) - displays movies which a user has added to their watch list
+ /people (public) - displays a list of popular actors accompanied by their popularity rating
+ /movies/:id (public) - displays a page of details for the selected movie where the user can view reviews as well as a list of the cast and their roles 

### Data hyperlinking.

.... Use screenshots to illustrate where data hyperlinking is present in your views - include captions.

![][hyperlink1]
> Clicking a card causes the display of that movie's details.
> Clicking a persons card will open their details page in a new tab

![][reviewLink]
>Clicking the 'Full Review' for a review extract will display the full text of the review

![][homepageLink]
>If there is a website associated with an actor clicking the house icon beside their name will open said website in a new tab
>In a similar fashion on the movie details page there is also a house icon which will bring the user to the home page for that movies production company in a new tab

![][actorPageLink]
>On the movie details page when the cast is being displayed a user can click on 'view actor page' where they are brought to the details page for that actor



---------------------------------

[hyperlink1]: ./public/hyperlink1.png
[movieDetail]: ./public/movieDetail.png
[review]: ./public/review.png
[reviewLink]: ./public/reviewLink.png
[cardLink]: ./public/cardLink.png
[stories]: ./public/storybook.png