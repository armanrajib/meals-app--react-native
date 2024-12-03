import { useNavigation } from "@react-navigation/native";
import {
  Image,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

import MealDetail from "./MealDetail";

function MealItem({
  id,
  title,
  imageUrl,
  duration,
  complexity,
  affordability,
}) {
  const navigation = useNavigation();

  return (
    <View style={styles.mealItem}>
      <Pressable
        android_ripple={{ color: "#eee" }}
        onPress={() =>
          navigation.navigate("MealDetail", {
            mealId: id,
            mealTitle: title,
          })
        }
        style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
      >
        <View>
          <Image source={{ uri: imageUrl }} style={styles.mealImage} />
          <Text style={styles.mealTitle}>{title}</Text>
        </View>
        <MealDetail
          duration={duration}
          complexity={complexity}
          affordability={affordability}
        />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  mealItem: {
    margin: 12,
    borderRadius: 16,
    backgroundColor: "white",
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  buttonPressed: {
    opacity: 0.9,
  },
  mealImage: {
    width: "100%",
    height: 200,
  },
  mealTitle: {
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
    marginTop: 12,
  },
});

export default MealItem;
