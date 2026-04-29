import "./RecipeCard.css";
import Button from "../../common/button/Button";

const RecipeCard = ({ recipe, isTip }) => {
  return (
    <div className={`recipe-card ${isTip ? "tip-mode" : ""}`}>
      <div className="recipe-image">
        <img src={recipe.image} alt={recipe.title} />
      </div>
      <div className="recipe-body">
        <h3 className="recipe-title">{recipe.title}</h3>

        <p className="recipe-desc">{recipe.description}</p>

       <div className="recipe-footer">
  <span className="recipe-meta">
    {recipe.time} - {recipe.level} - {recipe.serves}
  </span>
  <Button btnstyle="outline" className="recipe-btn"> 
    VIEW RECIPE 
  </Button>
</div>
      </div>
    </div>
  );
};

export default RecipeCard;