import { useContext, useEffect } from "react";
import {
  Alert,
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { MEALS } from "../data/dummy-data";
import MealDetail from "../components/MealDetail";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";
import IconButton from "../components/IconButton";
import { FavoritesContext } from "../store/context/favorites-context";
import {
  addFavorite as addFavoriteRedux,
  removeFavorite as removeFavoriteRedux,
} from "../store/redux/favoritesSlice";

function MealDetailScreen({ route, navigation }) {
  const { ids, addFavorite, removeFavorite } = useContext(FavoritesContext);

  // REDUX
  const favoriteMealIds = useSelector(
    (state) => state.favorites.favoriteMealIds
  );
  const dispatch = useDispatch();

  const { mealId, mealTitle } = route.params;

  // const mealIsFavorite = ids.includes(mealId);
  const mealIsFavorite = favoriteMealIds.includes(mealId);

  function handlePressFavorite() {
    // mealIsFavorite ? removeFavorite(mealId) : addFavorite(mealId);
    mealIsFavorite
      ? dispatch(removeFavoriteRedux(mealId))
      : dispatch(addFavoriteRedux(mealId));
  }

  useEffect(
    function () {
      navigation.setOptions({
        title: mealTitle,
        headerRight: () => (
          <IconButton
            icon={mealIsFavorite ? "heart-sharp" : "heart-outline"}
            color="#ff595e"
            onPress={handlePressFavorite}
          />
        ),
      });
    },
    [navigation, mealTitle, handlePressFavorite]
  );

  const {
    title,
    imageUrl,
    duration,
    complexity,
    affordability,
    ingredients,
    steps,
  } = MEALS.find((meal) => meal.id === mealId);

  return (
    <ScrollView style={styles.rootContainer}>
      <Image source={{ uri: imageUrl }} style={styles.image} />
      <Text style={styles.title}>{title}</Text>

      <MealDetail
        duration={duration}
        complexity={complexity}
        affordability={affordability}
      />

      <Subtitle>Ingredients</Subtitle>
      <List list={ingredients} />

      <Subtitle>Steps</Subtitle>
      <List list={steps} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32,
  },
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
  },
});

export default MealDetailScreen;
