import { useEffect, useState } from "react";
import RecipeCard from "./RecipeCard";

const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://dummyjson.com/recipes");
      const data = await res.json();

      setRecipes(data.recipes);
      setFiltered(data.recipes);
    };

    fetchData();
  }, []);

  const handleFilter = (type) => {
    if (type === "All") {
      setFiltered(recipes);
    } else {
      const result = recipes.filter((item) => item.mealType.includes(type));
      setFiltered(result);
    }
  };

  return (
    <>
      <div className="space-y-6">
        {/* Buttons */}
        <div className="flex gap-3">
          <button
            onClick={() => handleFilter("All")}
            className="bg-gray-700 text-white px-4 py-2 rounded"
          >
            All
          </button>
          <button
            onClick={() => handleFilter("Breakfast")}
            className="bg-green-500 text-white px-4 py-2 rounded"
          >
            Breakfast
          </button>
          <button
            onClick={() => handleFilter("Lunch")}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Lunch
          </button>
          <button
            onClick={() => handleFilter("Dinner")}
            className="bg-purple-500 text-white px-4 py-2 rounded"
          >
            Dinner
          </button>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-5 gap-10">
          {filtered.map((item) => (
            <RecipeCard key={item.id} recipe={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default RecipeList;
