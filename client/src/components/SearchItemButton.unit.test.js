import { render, screen, waitFor, rerender } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import SearchItemButton from "./SearchItemButton";
import axios from "axios";
import { act } from "react-dom/test-utils";
import { mockIngredientSuggestions } from "../__mocks__/mockData";

jest.mock("axios");

test("SearchItemButton renders correctly", async () => {
  axios.get.mockResolvedValue({
    data: mockIngredientSuggestions,
  });

  act(() => {
    render(
      <MemoryRouter>
        <SearchItemButton item={"Gin"} />
      </MemoryRouter>
    );
  });

  await waitFor(() => {
    expect(screen.getByText("Gin")).toBeInTheDocument();
  });
});
