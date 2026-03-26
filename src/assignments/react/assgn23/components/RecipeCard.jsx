const RecipeCard = ({ recipe }) => {
  return (
    <>
      <div className="bg-white rounded-xl  ">
        {/* Image container with 4:5 ratio */}
        <div className="aspect-[5/5] w-full overflow-hidden">
          <img
            src={recipe.image}
            alt={recipe.name}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="bg-gray-100 p-4 space-y-1">
          <h3 className="font-semibold text-sm text-gray-800 line-clamp-2">
            {recipe.name}
          </h3>

          <p className="text-xs text-gray-500">{recipe.cuisine}</p>

          <p className="text-sm font-medium text-yellow-600">
            ⭐ {recipe.rating}
          </p>
        </div>
      </div>
    </>
  );
};

export default RecipeCard;
