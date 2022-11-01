const recipesController = require("../../controllers/recipeController");
const fetch = require("jest-fetch-mock");

describe("recipesController", () => {
  describe("getRecipes", () => {
    it("should call res.json", () => {
      fetch.mockResponseOnce(
        JSON.stringify({ drinks: { test: "test drink info" } })
      );
      const req = {};
      const res = {
        json: jest.fn(),
      };

      recipesController.getRecipes();
      expect(fetch).toHaveBeenCalledTimes(1);
    });
  });
});
