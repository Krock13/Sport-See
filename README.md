# SportSee - User Profile Page

## Project Overview

SportSee is an emerging startup aimed at reinventing sports coaching through user-centric design and cutting-edge technology. The latest initiative is a revamped user profile page that enables users to monitor their workout sessions and calories burned in a visually engaging and user-friendly interface.

This development sprint has been dedicated to constructing this new user profile page with React, adhering closely to the Figma mockups provided by our in-house designer, Léo. The end product boasts interactive and dynamic Recharts to effectively visualize user fitness activity.

## Technical Highlights

- The project is paired with a NodeJS backend to manage HTTP requests and provide sample data. Development began using mocked data for functionality verification. Subsequently, the backend was integrated, allowing the application to toggle between mock and API data seamlessly.
- HTTP requests are managed via a custom Fetch hook coupled with a React context, which ensures the proper handling of request parameters and related data.
- While the application is designed to be fully operational at a 1024x780 pixel resolution, it is primarily optimized for a 1440x1024 pixel resolution to stay true to the design specifications.
- Interactive and dynamic data visualization is achieved through the use of the Recharts library, chosen for its React-friendly nature and ease of use.

## Backend Setup

The frontend application requires the corresponding backend to be installed and running. Please follow the instructions in the [backend repository](https://github.com/OpenClassrooms-Student-Center/P9-front-end-dashboard) to set up and launch the backend server.

Ensure that the backend server is running before you start the frontend to make all the features available and functioning correctly.

## Installation

To get a local copy up and running, follow these simple steps:

### Prerequisites

- Node.js
- npm or yarn

### Setting Up the Frontend

1. Clone the repo:
   ```bash
   git clone https://github.com/Krock13/Sport-See.git
   ```
2. Navigate to the frontend repository:
   ```bash
   cd path/to/Sport-See
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Run the project:
   ```bash
   npm run dev
   ```
