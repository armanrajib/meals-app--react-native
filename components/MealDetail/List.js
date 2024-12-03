import { StyleSheet, Text, View } from "react-native";

function List({ list }) {
  return list.map((listItem, index) => (
    <View key={index} style={styles.listItem}>
      <Text style={styles.itemText}>{listItem}</Text>
    </View>
  ));
}

const styles = StyleSheet.create({
  listItem: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginVertical: 4,
    marginHorizontal: 36,
    backgroundColor: "#ddd",
  },
  itemText: {
    color: "#333",
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
});

export default List;
