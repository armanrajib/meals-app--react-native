import { useContext } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

import { MEALS } from "../data/dummy-data";
import { FavoritesContext } from "../store/context/favorites-context";
import MealItem from "../components/MealItem";
import { useSelector } from "react-redux";

function FavoritesScreen() {
  const { ids } = useContext(FavoritesContext);

  // REDUX
  const favoriteMealIds = useSelector(
    (state) => state.favorites.favoriteMealIds
  );

  // const favoriteMeals = MEALS.filter((meal) => ids.includes(meal.id));
  const favoriteMeals = MEALS.filter((meal) =>
    favoriteMealIds.includes(meal.id)
  );

  if (favoriteMeals.length === 0)
    return (
      <View style={styles.emplyContainer}>
        <Text style={styles.emptyText}>No favorite meal added!</Text>
      </View>
    );

  return (
    <ScrollView style={styles.container}>
      {favoriteMeals.map((meal) => (
        <MealItem
          key={meal.id}
          id={meal.id}
          title={meal.title}
          imageUrl={meal.imageUrl}
          duration={meal.duration}
          affordability={meal.affordability}
          complexity={meal.complexity}
        />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  emplyContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  emptyText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
});

export default FavoritesScreen;
