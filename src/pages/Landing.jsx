import axios from 'axios';
import { useLoaderData } from 'react-router-dom';
import CocktailList from '../components/CocktailList';

export const loader = async () => {
  const searchTerm = '';
  const resp = await axios.get(cocktailSearchUrl + searchTerm);

  return {
    drinks: resp.data.drinks,
    searchTerm,
  };
};

const cocktailSearchUrl =
  'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

const Landing = () => {
  const { drinks, searchTerm } = useLoaderData();
  console.log(drinks);
  return (
    <>
      <CocktailList drinks={drinks}></CocktailList>
    </>
  );
};
export default Landing;
