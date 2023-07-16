import { render, screen, fireEvent } from "@testing-library/react";
import Recipe from "./Recipe";

const recipes = [
  {
    title: "Recipe 1",
    image: "recipe1.jpg",
    tags: ["tag1", "tag2"],
    description: "Recipe 1 description",
    chefName: "Chef 1",
  },
  {
    title: "Recipe 2",
    image: "recipe2.jpg",
    tags: ["tag3", "tag4"],
    description: "Recipe 2 description",
    chefName: "Chef 2",
  },
];

describe("Recipe component", () => {
  test("renders Recipe component with recipes", () => {
    render(<Recipe recipes={recipes} />);

    const recipe1Elements = screen.queryAllByText("Recipe 1");
    expect(recipe1Elements.length).toBe(2);

    expect(screen.getByText("Recipe 2")).toBeInTheDocument();
  });

  test("displays recipe details when a recipe is clicked", () => {
    render(<Recipe recipes={recipes} />);

    fireEvent.click(screen.getByTestId("recipe-title-0"));

    const recipe1Elements = screen.getAllByText("Recipe 1", { selector: "h3" });
    expect(recipe1Elements.length).toBe(2);

    expect(screen.getByText("Recipe 1 description")).toBeInTheDocument();
    expect(screen.getByText("Chef 1")).toBeInTheDocument();
  });

  test("renders the Detail component when activeItem is set", () => {
    render(<Recipe recipes={recipes} />);
    const recipeTitles = screen.getAllByTestId(/recipe-title-/i);

    fireEvent.click(recipeTitles[0]);

    const detailComponent = screen.getByTestId("detail-component");
    expect(detailComponent).toBeInTheDocument();
  });

  test("renders without crashing when no recipes are provided", () => {
    render(<Recipe recipes={[]} />);

    expect(screen.queryByText("Marley Spoon Recipes")).toBeInTheDocument();
  });
});
