This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# Pokémon Fan Application

A web application for Pokémon fans, built with Next.js. This app allows users to explore detailed information about various Pokémon, including their stats, images, and abilities. Integrated with the PokeAPI, it provides a rich user experience with dynamic routing, filtering, and sorting options.

## Features

- **Detailed Pokémon Profiles**: View individual Pokémon stats, abilities, and images by accessing dynamic routes.
- **Filtering and Sorting**: Filter Pokémon by type and sort them by various criteria to customize the browsing experience.
- **Dynamic Metadata**: Automatically generates SEO-friendly metadata based on Pokémon profiles for improved social sharing.
- **Error Handling**: Displays user-friendly messages when data from the API is unavailable.
- **Smooth Navigation**: Uses Next.js `Link` and `useRouter` to provide a seamless navigation experience.
- **Responsive Design**: Optimized for both desktop and mobile users.

## Technologies Used

- **Next.js**: For server-side rendering and optimized performance.
- **React**: For building dynamic and interactive user interfaces.
- **PokeAPI**: To fetch real-time data about Pokémon.
- **JavaScript (ES6+)**: Core programming language used for the project.
- **CSS**: Basic styling and layout adjustments.

## Project Structure

- **/pages**: Contains pages for individual Pokémon, abilities, and lists with dynamic routing.
- **/components**: Reusable components such as Pokémon cards, filters, and navigation elements.
- **/utils**: Helper functions for handling API requests and data transformations.

## Future Enhancements

- Add a search bar for easier navigation.
- Expand filter options to include more categories.
- Implement user login to save favorite Pokémon.

## License

This project is licensed under the MIT License.


## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
