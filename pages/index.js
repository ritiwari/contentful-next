import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

import { createClient } from "contentful";

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  console.log(process.env.CONTENTFUL_SPACE_ID);

  const res = await client.getEntries();
  return {
    props: {
      recipes: res.items,
    },
  };
}
 
export default function Home({ recipes }) {
  console.log(recipes);
  return <div className="recipe-list">Recipe List</div>;
}

// export default function Recipes() {
//   return (
//     <div className="recipe-list">
//       Recipe List
//     </div>
//   )
// }
