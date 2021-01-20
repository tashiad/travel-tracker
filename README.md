# COVID'S Over Travel Tracker

---

#### A project for when we can travel the world again.

---

## Table of Contents
* [Introduction](#introduction)
* [Features](#features)
* [Technologies](#technologies)
* [Deployment](#deployment)
* [Author](#author)

## Introduction
The primary goal of this project was to create an application for a traveler to manage and track their trips via a travel agency. A user can log in to see a dashboard with their past, present, future, and pending trips and destination info, along with some stats about their travels. They can also fill out a form to send a new trip request to their travel agent. The specifications can be found [here](https://frontend.turing.io/projects/travel-tracker.html).

## Motivation
* Use OOP to drive the design of the application and the code
* Work with an API to send and receive data
* Solidify the code review process
* Create a robust test suite that thoroughly tests all functionality of a client-side application

---

## Features
* [Login](#Login)
* [User Dashboard](#User-Dashboard)
* [Filter Trips](#Filter-Trips)
* [Plan A New Trip](#Plan-A-New-Trip)

#### Login
On load, the user sees a login form. Credentials are username: `traveler50` (or any number at the end between 1-50) and password: `travel2020`
<p align = "center">
<img src="https://user-images.githubusercontent.com/66852774/105107979-7e81ab00-5a76-11eb-8922-187b51cca44c.gif">
</p>
    <details>
      <summary>Under the Hood</summary>
      A single user's info is accessed by using `fetch` and interpolating their id into the endpoint. Error handling ensures that the form is filled out correctly by validating the username and password according to certain conditions.
    </details>

#### User Dashboard
Once logged in, a user can see all their trips displayed (past, present, future, approved, and pending) and sorted by date, as well as some stats on how much they've spent on trips for the current year (helpful for budgeting), how many days they've traveled, and how many trips they've taken.
<p align = "center">
<img src="https://user-images.githubusercontent.com/66852774/105107925-63af3680-5a76-11eb-9835-5a3459d15b7d.png">
</p>
    <details>
      <summary>Under the Hood</summary>
      The user id is matched with their trips from the trips API, and then trips are matched with destination info from the destination API. All of this info is displayed on trip cards and a stats sidebar for the user to easily see.
    </details>

#### Filter Trips
While most trips have been approved by the "agent," others are still pending. The user can filter between Approved Trips, Pending Trips, and All Trips.
<p align = "center">
<img src="https://user-images.githubusercontent.com/66852774/105108017-95280200-5a76-11eb-87b0-b4baf61b0d42.gif">
</p>
    <details>
      <summary>Under the Hood</summary>
      Upon creation of the trip cards, classes are added to each category of trip according to their status. Trip cards are either shown or hidden in the DOM depending on which button is clicked.
    </details>

#### Plan A New Trip
Users can fill out the form in the sidebar to quote a new trip before requesting. Once requested, a new trip card is added to the dashboard with a status of 'pending'.
<p align = "center">
<img src="https://user-images.githubusercontent.com/66852774/105108206-fb148980-5a76-11eb-8c3f-dfabec7b494c.gif">
</p>
    <details>
      <summary>Under the Hood</summary>
      Error handling ensures that the form is filled out correctly. That way, the POST request will have the correct format.
    </details>

---

#### Accessibility & Responsive Design
This app was built with all users in mind. I used Lighthouse and [WAVE](https://wave.webaim.org/) to work towards including as broad of an audience as I could. Of course, as I am committed to including all users, I am happy to make future edits to address any areas that I may have missed.
<p align = "center">
<img src="https://user-images.githubusercontent.com/66852774/105108063-af61e000-5a76-11eb-8df0-d6f4ee1ca43f.gif">
</p>


#### Continuous Improvement/Future Improvements
- Add a travel agency with their own login and dashboard of new trip requests ("pending" trips). Allow them to see their total income generated this year and travelers on trips for today's date. Allow them to approve/deny trip requests, search users by name, view a single user's info, add suggested activities, and delete an upcoming trip for the user. Allow them to create new destinations.
- Add a countdown to their next trip on the user dashboard.
- Implement more robust trip filtering on the current site (this feature would be especially necessary as the application scales and users add more trips)

---

## Technologies
JavaScript, Fetch/Async, JSON, Mocha, Chai, HTML5, SASS, Normalize, Webpack

## Deployment
This app requires a local server to be running independent of GH. Clone down [this repo](https://github.com/turingschool-examples/travel-tracker-api) and follow the instructions in the README. Once the server is running on your local machine, the site can be seen in all of it's glory here:

[Deployment Link](https://tashiad.github.io/travel-tracker/dist/index.html)

## Author
<table>
    <tr>
        <td> Tashia Davis <a href="https://github.com/tashiad">GH</td>
    </tr>
 <td><img src="https://avatars3.githubusercontent.com/u/66852774?s=400&v=4" alt="Tashia Davis GitHub"
 width="150" height="auto" /></td>
</table>
