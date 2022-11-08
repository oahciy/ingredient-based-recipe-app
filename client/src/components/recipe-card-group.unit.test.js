// mock recipe-card-group.js
import { render, screen, waitFor } from "@testing-library/react";
import RecipeCardGroup from "./recipe-card-group";
import { MemoryRouter } from "react-router-dom";
import RecipeCard from "./recipe-card";
import { useOutletContext } from "react-router-dom";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useOutletContext: () => ({
    recipes: [
      {
        idDrink: "11007",
        strDrink: "Margarita",
        strDrinkAlternate: null,
        strTags: "IBA,ContemporaryClassic",
        strVideo: null,
        strCategory: "Ordinary Drink",
        strIBA: "Contemporary Classics",
        strAlcoholic: "Alcoholic",
        strGlass: "Cocktail glass",
        strInstructions: "test instructions",
        strIngredient1: "test ingredient 1",
        strIngredient2: "test ingredient 2",
        strIngredient3: "test ingredient 3",
      },
      {
        idDrink: "11008",
        strDrink: "Vodka Martini",
        strDrinkAlternate: null,
        strTags: "IBA,ContemporaryClassic",
        strVideo: null,
        strCategory: "Ordinary Drink",
        strIBA: "Contemporary Classics",
        strAlcoholic: "Alcoholic",
        strGlass: "Cocktail glass",
        strInstructions: "test instructions",
        strIngredient1: "test ingredient 1",
        strIngredient2: "test ingredient 2",
        strIngredient3: "test ingredient 3",
      },
    ],
    setRecipes: jest.fn(),
    search: ["test"],
    setSearchQuery: jest.fn(),
  }),
}));

test("RecipeCardGroup renders correctly", () => {
  render(
    <MemoryRouter>
      <RecipeCardGroup />
    </MemoryRouter>
  );
  // check that the recipe card renders
  expect(screen.getByText("Margarita")).toBeInTheDocument();
  expect(screen.getByText("Vodka Martini")).toBeInTheDocument();
});
