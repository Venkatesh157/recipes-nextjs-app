import { render, screen } from "@testing-library/react";
import Detail from "./Detail";

describe("Detail component", () => {
  const recipe = {
    title: "Delicious Recipe",
    image: "https://example.com/recipe.jpg",
    tags: ["tag1", "tag2"],
    description: "This is a delicious recipe.",
    chefName: "John Doe",
  };

  test("renders recipe details", () => {
    render(<Detail recipe={recipe} />);

    // Assert that the recipe details are rendered
    expect(screen.getByText(recipe.title)).toBeInTheDocument();
    expect(screen.getByAltText(recipe.title)).toBeInTheDocument();
    expect(screen.getByText(recipe.description)).toBeInTheDocument();
    expect(screen.getByText("Chef:")).toBeInTheDocument();
    expect(screen.getByText(recipe.chefName)).toBeInTheDocument();
    expect(screen.getByText("Tags:")).toBeInTheDocument();
    expect(screen.getByText("tag1")).toBeInTheDocument();
    expect(screen.getByText("tag2")).toBeInTheDocument();
  });

  test("renders without crashing when no recipe is provided", () => {
    render(<Detail recipe={null} />);

    // Assert that the component renders without crashing when no recipe is provided
    expect(screen.queryByText(recipe.title)).not.toBeInTheDocument();
    expect(screen.queryByAltText(recipe.title)).not.toBeInTheDocument();
    expect(screen.queryByText(recipe.description)).not.toBeInTheDocument();
    expect(screen.queryByText("Chef:")).not.toBeInTheDocument();
    expect(screen.queryByText(recipe.chefName)).not.toBeInTheDocument();
    expect(screen.queryByText("Tags:")).not.toBeInTheDocument();
    expect(screen.queryByText("tag1")).not.toBeInTheDocument();
    expect(screen.queryByText("tag2")).not.toBeInTheDocument();
  });
});
