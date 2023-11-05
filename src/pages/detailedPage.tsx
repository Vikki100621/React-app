import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getReciepFromApi } from '../API/api';
import { DetailedPage } from '../interface/interface';

function PageId() {
  const params = useParams();
  const navigate = useNavigate();
  const initialState: DetailedPage = { id: 0, title: '', image: '' };
  const [recipe, setRecipe] = useState(initialState);
  const fetchRecipeById = async () => {
    try {
      const response = await getReciepFromApi(Number(params.id));
      setRecipe(response);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchRecipeById();
  }, [params.id]);

  const handleGoBack = () => {
    const page = params.page;
    navigate(`/${page}`);
  };

  return (
    <div className="detailed-page">
      <button type="submit" onClick={handleGoBack}>
        ❌
      </button>
      <h2>{recipe.title}</h2>
      <span>Ready in {recipe.readyInMinutes}</span>
      <img src={recipe.image} alt={recipe.title} />
      <div>{recipe.instructions}</div>
    </div>
  );
}
export default PageId;
