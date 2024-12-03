import { StyleSheet, Text, View } from "react-native";

function Subtitle({ children }) {
  return (
    <View style={styles.subtitleContainer}>
      <Text style={styles.subtitle}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  subtitleContainer: {
    borderBottomWidth: 2,
    marginVertical: 4,
    marginHorizontal: 36,
    padding: 6,
  },
  subtitle: {
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
  },
});

export default Subtitle;
