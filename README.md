This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`]

## Getting Started

First install dependencies, run the development server:

```bash
# Install dependencies
npm install

# Run application
npm run dev

# Run tests
npm run test

```

## Development

# Tech Decision

I've used Next JS to implement the frontend application that fetches and displays Marley Spoon Recipes. I've implemented Server and client components from Next 13.4 for increased performance.

# Contentful Research

- To fetch data from Contentful, I started browsing throught the documentation to understand the content models
- I used fetch with the contentful url to get the idea of contentful response
- I also referred some Youtube videos to understand Contentful webapp, Content Models, entries and linked items
- Then, I finilazied decided to use createClient() from Contentful to fetch the recipe's data

# App Implementation

- initializing the Contentful client in libs
- Store the app secrets in env.local. Best practice for storing secrets
- Use Server component to fetch the recipe data from Contentful in homepage(root)
- Identify and Write unit test cases to maintain quality of the application.
- Use Recipe(Client component) to render the UI and handle detail view based on user selection.
  - Since, useState() is needed handle the state, I used client component
- Used next/image to optimize image loading thereby increasing performance of the app.
- Make sure the code passes all written unit test cases.

- Used Tailwind CSS for CSS implemented
  - Tailwind is faster and suggested from NextJS
  - Tailwind helps in creating responsive design with minimal setup and its faster.

## Total Hours

I spent around 5-6 hours to implement the application
