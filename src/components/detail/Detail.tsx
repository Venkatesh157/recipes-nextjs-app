import Image from "next/image";
import React from "react";
import ReactMarkdown from "react-markdown";
import { DetailProps } from "./Detail.entity";

function Detail({ recipe }: DetailProps) {
  if (!recipe) {
    return null;
  }

  return (
    <>
      <div
        className="md:w-3/5 p-4 md:p-10 pt-0 border-l-2"
        data-testid="detail-component"
      >
        <h2 className="text-xl mb-6">Recipe Details</h2>
        <h3 className="text-lg mb-4">{recipe.title}</h3>
        <div className="mb-4">
          <Image
            src={`https:${recipe.image}`}
            width={320}
            height={240}
            alt={recipe.title}
            className="rounded"
          />
        </div>
        <h3 className="text-xl mb-2">Description:</h3>
        <ReactMarkdown className="mb-4">{recipe.description}</ReactMarkdown>

        {recipe.chefName && (
          <div>
            <h3 className="text-xl">Chef:</h3>
            <p className="mb-4 text-base">{recipe.chefName}</p>
          </div>
        )}

        {recipe.tags && recipe.tags.length > 0 && (
          <>
            <h3 className="text-xl">Tags:</h3>
            <div className="flex gap-2 flex-wrap">
              {recipe.tags.map((item, index) => {
                return (
                  <div key={index} className="bg-pink-300 rounded-md w-24">
                    <p className="text-white p-1">{item}</p>
                  </div>
                );
              })}
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default Detail;
