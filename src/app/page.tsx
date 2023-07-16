import React from "react";
import { client } from "@/lib/client";
import { EntrySkeletonType } from "contentful";
import Recipe from "@/components/recipe/Recipe";

interface Recipe {
  title: string;
  image: string;
  tags: string[];
  description: string;
  chefName: string;
}

interface ContentfulResponse extends EntrySkeletonType {
  total: number;
  skip: number;
  limit: number;
  items: {
    sys: {
      id: string;
      type: string;
      createdAt: string;
      updatedAt: string;
      environment: {
        sys: {
          id: string;
          type: string;
          linkType: string;
        };
      };
      revision: number;
      locale: string;
    };
    fields: {
      title: string;
      photo: {
        fields: {
          file: {
            url: string;
          };
        };
      };
      tags?: {
        fields: {
          name: string;
        };
      }[];
      description: string;
      chef?: {
        sys: {
          id: string;
        };
      };
    };
  }[];
  includes: {
    Entry?: {
      sys: {
        space: {
          sys: {
            type: string;
            linkType: string;
            id: string;
          };
        };
        id: string;
        type: string;
        createdAt: string;
        updatedAt: string;
        environment: {
          sys: {
            id: string;
            type: string;
            linkType: string;
          };
        };
        revision: number;
        contentType: {
          sys: {
            type: string;
            linkType: string;
            id: string;
          };
        };
        locale: string;
      };
      fields: {
        name: string;
      };
    }[];
    Asset?: {
      sys: {
        space: {
          sys: {
            type: string;
            linkType: string;
            id: string;
          };
        };
        id: string;
        type: string;
        createdAt: string;
        updatedAt: string;
        environment: {
          sys: {
            id: string;
            type: string;
            linkType: string;
          };
        };
        revision: number;
        locale: string;
      };
      fields: {
        title: string;
        file: {
          url: string;
          details: {
            size: number;
            image: {
              width: number;
              height: number;
            };
          };
          fileName: string;
          contentType: string;
        };
      };
    }[];
  };
}

async function getData(): Promise<ContentfulResponse> {
  const response = await client.getEntries<ContentfulResponse>({
    content_type: "recipe",
  });
  return response;
}
async function Post(): Promise<JSX.Element> {
  const data = await getData();

  const recipes: Recipe[] = data.items.map((item) => {
    const recipe = item.fields;
    const tags = recipe.tags ? recipe.tags.map((tag) => tag.fields.name) : [];
    const chefId = recipe.chef?.sys?.id;
    const chef = chefId
      ? data.includes?.Entry?.find((entry) => entry.sys?.id === chefId)?.fields
      : null;

    return {
      title: recipe.title,
      image: recipe.photo.fields.file.url,
      tags: tags,
      description: recipe.description,
      chefName: chef?.name ?? "",
    };
  });

  return (
    <div>
      <Recipe recipes={recipes} />
    </div>
  );
}

export default Post;
