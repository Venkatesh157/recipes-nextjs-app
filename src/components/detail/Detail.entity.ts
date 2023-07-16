export interface RecipeItem {
  title: string;
  image: string;
  tags: string[];
  description: string;
  chefName: string;
}

export interface DetailProps {
  recipe: RecipeItem | null;
}
