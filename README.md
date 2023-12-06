
# CITY EXPLORER FRONTEND

A frontend for city explorer application

This application is built using Angular, Angular Material and Rxjs for UI.

On the homepage, List of different cities is shown with pictures and name of the city.

  - The city list is fetched by making an API call to the Nodejs backend
  - Once use selects a city to explore the city more, use will be redirected to a new route which fetches the selected city data by making an API call.
  - On city details page, you can view various landmarks 
  - You can view the map to know how to reach them

Clone


# CLONE
    Clone the project using
     https://github.com/Umme-hanii/city-explorer-frontend.git


## Prerequisites

 - Nodejs and NPM Package Manager
 - Angular CLI

# HOW TO RUN THE PROJECT
  - Clone the project
  - npm i
  - npm start

# TOOLS AND TECHNOLOGIES USED
 - Angular          -  Frontend Framework
 - Typescript       -  Language used
 - Angular Material -  UI Library
 - SCSS             -  For Styling
 - Jasmine, Karma   -  Unit Tests

#STRUCTURE / ARCHITECTURE
   
- src/                              # Source code
  - app/                            # Angular application code
    - city/
      - city-banner                 # Reusable components
      - city-details                # Reusable components
      - city-list
      - city component files        # Reusable components
    - footer/                       # Angular services
    - modules/                      # Angular modules
    - nav-bar/                      # Views or pages
    - page-not-found/               # Views or pages
    - shared/                       # Views or pages
    - app-routing.module.ts         # Angular routing module
    - app.module.ts                 # Angular root module
  - assets/images                   # all the images
  - environments/                   # Api urls and api keys


   