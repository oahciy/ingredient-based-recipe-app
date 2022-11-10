import App from "../App";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import axios from "axios";
import { act } from "react-dom/test-utils";
import {
  mockIngredientSuggestions,
  mockDrinksApi,
} from "../__mocks__/mockData";

jest.mock("axios");
String.prototype.toLowerCase = jest.fn().mockImplementation(() => "vodka");

test("App renders correctly", async () => {
  // mock axios for specific url
  // get ingredients
  axios.get.mockResolvedValueOnce({
    data: mockIngredientSuggestions,
  });

  // get recipes
  axios.get.mockResolvedValue({
    data: mockDrinksApi,
  });

  act(() => {
    render(<App />);
  });

  await screen.findByText("Search");
});

test("App can route correctly to /recipes", async () => {
  // mock axios for specific url
  // get ingredients
  axios.get.mockResolvedValue({
    data: mockIngredientSuggestions,
  });

  // get recipes
  // axios.get.mockResolvedValueOnce({
  //   data: mockDrinksApi,
  // });

  act(() => {
    render(<App />);
  });

  await waitFor(() => {
    expect(
      screen.getByPlaceholderText("Start by typing your ingredients")
    ).toBeInTheDocument();
  });

  await waitFor(() => {
    expect(screen.getByText("Search")).toBeInTheDocument();
  });

  await waitFor(() => {
    expect(screen.getByText("Add")).toBeInTheDocument();
  });

  // less waste more taste
  await waitFor(() => {
    expect(screen.getByText("Less Waste More Taste")).toBeInTheDocument();
  });
});
