"use client";
import React, { useState } from "react";
import Image from "next/image";
import Detail from "../detail/Detail";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

interface RecipeItem {
  title: string;
  image: string;
  tags: string[];
  description: string;
  chefName: string;
}

interface RecipeProps {
  recipes: RecipeItem[];
}

function Recipe({ recipes }: RecipeProps) {
  const [activeItem, setActiveItem] = useState<RecipeItem>(recipes[0]);

  if (!recipes) {
    return null;
  }

  return (
    <>
      <h1 className="text-xl p-4">Marley Spoon Recipes</h1>
      <div className="md:flex">
        <div className="md:w-2/5 border-t-2 md:border-t-0 md:border-r-2">
          <div className="sm:overflow-y-auto md:h-screen">
            {recipes.map((recipe: RecipeItem, index) => {
              return (
                <div
                  key={recipe.title}
                  onClick={() => {
                    setActiveItem(recipe);
                  }}
                  className="border-b-2 p-2 flex gap-2 cursor-pointer hover:bg-slate-100"
                  data-testid={`recipe-title-${index}`}
                >
                  <Image
                    src={`https:${recipe.image}`}
                    width={150}
                    height={150}
                    alt={recipe.title}
                    className="rounded"
                  />
                  <h3 className="text-lg">{recipe.title}</h3>
                </div>
              );
            })}
          </div>
        </div>
        {activeItem && <Detail recipe={activeItem} />}
      </div>
    </>
  );
}

export default Recipe;
