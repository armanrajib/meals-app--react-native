import { Pressable, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

function IconButton({ icon, color, onPress }) {
  return (
    <Pressable onPress={onPress}>
      <Ionicons name={icon} size={24} color={color} />
    </Pressable>
  );
}

export default IconButton;
