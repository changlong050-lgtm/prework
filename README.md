# WEB103 Prework - *CreatorVerse*

Submitted by: **Liam Wu**

About this web app: **CreatorVerse is a content creator management web application built with React, Supabase, and PicoCSS. The app allows users to browse content creators, view detailed information, add new creators, edit existing entries, and delete creators. Each creator includes a name, channel link, description, and image displayed in card format.**

Time spent: **12** hours

## Required Features

The following **required** functionality is completed:

- [x] **A logical component structure in React is used to create the frontend of the app**
- [x] **At least five content creators are displayed on the homepage of the app**
- [x] **Each content creator item includes their name, a link to their channel/page, and a short description of their content**
- [x] **API calls use the async/await design pattern via Axios or fetch()**
- [x] **Clicking on a content creator item takes the user to their details page, which includes their name, url, and description**
- [x] **Each content creator has their own unique URL**
- [x] **The user can edit a content creator to change their name, url, or description**
- [x] **The user can delete a content creator**
- [x] **The user can add a new content creator by entering a name, url, or description and then it is displayed on the homepage**

## Optional Features

The following **optional** features are implemented:

- [x] Picocss is used to style HTML elements
- [x] The content creator items are displayed in a creative format, like cards instead of a list
- [x] An image of each content creator is shown on their content creator card

## Additional Features

The following **additional** features are implemented:

* [x] Added a custom homepage with a full-screen background image
* [x] Added navigation buttons for viewing creators and adding creators
* [x] Added a global Home button for easy navigation
* [x] Added hover animations and custom styling
* [x] Responsive card layout for creator display
* [x] Individual creator pages with edit functionality

## Video Walkthrough

Here's a walkthrough of implemented required features:

<img src="./cp_prework.gif" title="Video Walkthrough" width="700" alt="Video Walkthrough" />

GIF created with **LICECap**

## Notes

Using git and github is a challenge for me. And during development, one challenge was integrating React Router dynamic routes for creator details and edit pages while keeping navigation clean across the application. Another challenge was implementing CRUD operations with Supabase and updating the UI after add, edit, and delete actions. Styling the homepage and organizing creator cards using PicoCSS also required additional customization.
Besides that, I find it hard to display well the fotos. To display fotos, I have a component display creator, which I use in view creators page. But that component doesn't work well in one solo creator display page. So I rewrite css for that page.
And connecting supabase it's a bit hard. Because It took me long time to find the connect URL and other fields, and I need to add a SQL query to make the automatically increase the id, the primary key. And I debug a lot, used the console log to see if I can get the data from supabase successfully because I didn't uncheck the data safe mode.
And I practice a lot with the react routers.

## License

Copyright 2026 Changlong Wu

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.

You may obtain a copy of the License at

> http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
