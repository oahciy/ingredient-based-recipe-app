import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SearchBar from "./SearchBar";
import { MemoryRouter } from "react-router-dom";
import axios from "axios";

jest.mock("axios");

test("SearchBar renders correctly", () => {
  // mock the axios call to return a list of ingredients
  axios.get.mockResolvedValueOnce({
    data: ["Vodka", "Gin", "Rum", "Tequila", "Triple Sec", "Lime Juice"],
  });
  render(
    <MemoryRouter>
      <SearchBar />
    </MemoryRouter>
  );
  // check that the search bar renders
  expect(screen.getByRole("textbox")).toBeInTheDocument();
  // check that the search button renders with the correct text
  expect(screen.getByText("Search")).toBeInTheDocument();
  // check that the add button renders with the correct text
  expect(screen.getByText("Add")).toBeInTheDocument();
  //check that you can type in the search bar
  userEvent.type(screen.getByRole("textbox"), "Vodka");
  expect(screen.getByRole("textbox")).toHaveValue("Vodka");
  // check that the add button adds the search word to the search array
  userEvent.click(screen.getByText("Add"));
  expect(screen.getByText("Vodka")).toBeInTheDocument();
  // check that the search button gets the recipes
  //mock the axios call to return a list of recipes
});
