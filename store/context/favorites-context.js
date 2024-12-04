import { createContext, useState } from "react";

const FavoritesContext = createContext({
  ids: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {},
});

function FavoritesContextProvider({ children }) {
  const [favoriteMealIds, setFavouriteMealIds] = useState([]);

  function addFavorite(id) {
    setFavouriteMealIds((prev) => [...prev, id]);
  }

  function removeFavorite(id) {
    setFavouriteMealIds((prev) => prev.filter((mealId) => mealId !== id));
  }

  const value = {
    ids: favoriteMealIds,
    addFavorite,
    removeFavorite,
  };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
}

export { FavoritesContext, FavoritesContextProvider };
