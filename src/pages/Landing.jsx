import axios from 'axios';
import { useLoaderData } from 'react-router-dom';
import CocktailList from '../components/CocktailList';
import SearchForm from '../components/SearchForm';
import { useQuery } from '@tanstack/react-query';

const SearchCocktailsQuery = (searchTerm) => {
  return {
    queryKey: ['search', searchTerm || 'all'],
    queryFn: async () => {
      const resp = await axios.get(cocktailSearchUrl + searchTerm);
      return resp.data.drinks;
    },
  };
};

export const loader =
  (queryClient) =>
  async ({ request }) => {
    console.log(request);
    const url = new URL(request.url);

    const searchTerm = url.searchParams.get('search') || '';
    //
    await queryClient.ensureQueryData(SearchCocktailsQuery(searchTerm));

    return {
      // drinks: resp.data.drinks,
      searchTerm,
    };
  };

const cocktailSearchUrl =
  'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

const Landing = () => {
  const { searchTerm } = useLoaderData();
  const { data: drinks } = useQuery(SearchCocktailsQuery(searchTerm));
  return (
    <>
      <SearchForm searchTerm={searchTerm}></SearchForm>
      <CocktailList drinks={drinks}></CocktailList>
    </>
  );
};
export default Landing;
