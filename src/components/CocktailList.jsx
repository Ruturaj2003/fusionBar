const CocktailList = ({ drinks }) => {
  if (!drinks) {
    return (
      <h3 style={{ textAlign: 'center' }}>
        404: Cocktails not found. Maybe they're at a secret speakeasy?
      </h3>
    );
  }

  const formattedDrinks = drinks.map((item) => {
    const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } = item;
    return {
      id: idDrink,
      name: strDrink,
      image: strDrinkThumb,
      info: strAlcoholic,
      glass: strGlass,
    };
  });
  return <div>CocktailList</div>;
};
export default CocktailList;
