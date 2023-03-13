import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

import { createClient } from "contentful";
import RecipeCard from "@/components/RecipeCard";

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  // console.log(process.env.CONTENTFUL_SPACE_ID);

  // const res = await client.getEntries();
  const res = await client.getEntries({ content_type: "recepie" });
  return {
    props: {
      recipes: res.items,
    },
    revalidate: 1,
  };
}

export default function Home({ recipes }) {
  // console.log(recipes);
  return (
    <>
      <div className="recipe-list">Recipe List</div>
      <div>
        {recipes.map((recipe, i) => (
          <div key={recipe.sys.id}>
            <RecipeCard recipe={recipe} />
          </div>
        ))}
      </div>
    </>
  );
}

// export default function Recipes() {
//   return (
//     <div className="recipe-list">
//       Recipe List
//     </div>
//   )
// }
