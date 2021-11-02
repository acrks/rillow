# README

[Rillow - A Zillow clone](https://rillow.herokuapp.com/)

![Screen Shot 2021-10-08 at 9 47 47 AM](https://user-images.githubusercontent.com/78821523/136594275-f2fd59f7-4c64-4845-b1bf-2cb7b319e1b9.png)

Key Features
* User account creation and login
* Upload listings to Rillow
* Edit/Delete listings
* See a full index of listings

Coming Soon
* Favorite listings
* Search for listings


![Screen Shot 2021-10-08 at 10 03 48 AM](https://user-images.githubusercontent.com/78821523/136598147-ea9263fe-5a1b-4397-97f4-c5e8b5a7e4ee.png)
![Screen Shot 2021-10-08 at 10 03 34 AM](https://user-images.githubusercontent.com/78821523/136598150-2dadb0d2-ce1e-49bc-a198-2f05d2c58af8.png)

How Rillow Was Built
Rillow is a single-page full-stack app incorporating:

Ruby on Rails
React/Redux
AWS S3
JavaScript / AJAX / JBuilder
HTML5 / CSS
PostgreSQL

Rillow is a single-page app built on the React JavaScript library. The React Router JavaScript library is used to manage user navigation. The Rails API is queried with AJAX requests and returns JSON structures which are incorporated into the Redux state.

Development Insights
One of the most difficult design elements of Rillow was using the Rails API to perform database queries. JBuilder responses are sent from Rails to Redux and are used to update the state of our React components.
