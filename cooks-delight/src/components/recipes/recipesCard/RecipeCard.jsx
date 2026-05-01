import "./RecipeCard.css";
import Button from "../../common/button/Button";
import { useNavigate } from "react-router-dom";

const RecipeCard = ({ recipe }) => {
  const navigate = useNavigate();

  const handleViewRecipe = () => {
    navigate(`/recipes/${recipe.id}`);
  };

  return (
    <div className="recipe-card">
      <div className="recipe-image">
        <img src={recipe.image} alt={recipe.title} />
      </div>
      <div className="recipe-body">
        <h3 className="recipe-title">{recipe.title}</h3>

        <p className="recipe-desc">
          {recipe.description?.length > 100
            ? recipe.description.substring(0, 100) + "..."
            : recipe.description}
        </p>

        <div className="recipe-footer">
          <span className="recipe-meta">
            {recipe.time} - {recipe.level} - {recipe.serves}
          </span>

          <Button label="VIEW RECIPE" btnstyle="outline" onClick={handleViewRecipe}> VIEW RECIPE </Button>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
