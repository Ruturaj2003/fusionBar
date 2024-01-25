import axios from 'axios';
import { useLoaderData } from 'react-router-dom';
import CocktailList from '../components/CocktailList';
import SearchForm from '../components/SearchForm';

export const loader = async ({ request }) => {
  console.log(request);
  const url = new URL(request.url);

  const searchTerm = url.searchParams.get('search') || '';
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
  return (
    <>
      <SearchForm searchTerm={searchTerm}></SearchForm>
      <CocktailList drinks={drinks}></CocktailList>
    </>
  );
};
export default Landing;
