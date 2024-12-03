import { StyleSheet, Text, View } from "react-native";

function MealDetail({ duration, complexity, affordability }) {
  return (
    <View style={styles.mealDetail}>
      <Text style={styles.mealDetailItem}>{duration}min</Text>
      <Text style={styles.mealDetailItem}>{complexity.toUpperCase()}</Text>
      <Text style={styles.mealDetailItem}>{affordability.toUpperCase()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  mealDetail: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
  },
  mealDetailItem: {
    fontSize: 12,
    marginHorizontal: 4,
  },
});

export default MealDetail;
