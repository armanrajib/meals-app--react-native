import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";
import { Provider } from "react-redux";

import CategoriesScreen from "./screens/CategoriesScreen";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealDetailScreen from "./screens/MealDetailScreen";
import FavoritesScreen from "./screens/FavoritesScreen";
import { FavoritesContextProvider } from "./store/context/favorites-context";
import { store } from "./store/redux/store";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#f7f7f7",
        },
        headerShadowVisible: false,
        headerTitleAlign: "center",
        headerTintColor: "#333",
        sceneStyle: {
          backgroundColor: "#f7f7f7",
        },
        drawerContentStyle: {
          backgroundColor: "#f7f7f7",
        },
        drawerActiveTintColor: "#333",
        drawerActiveBackgroundColor: "#eee",
      }}
    >
      <Drawer.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          title: "All Categories",
          drawerIcon: ({ size, color }) => (
            <Ionicons name="restaurant" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          title: "Favorite Meals",
          drawerIcon: ({ size, color }) => (
            <Ionicons name="heart-outline" size={size} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

function App() {
  return (
    <>
      <StatusBar style="auto" />
      <FavoritesContextProvider>
        <Provider store={store}>
          <NavigationContainer>
            <Stack.Navigator
              screenOptions={{
                headerStyle: {
                  backgroundColor: "#f7f7f7",
                },
                headerShadowVisible: false,
                headerTitleAlign: "center",
                headerTintColor: "#333",
                contentStyle: {
                  backgroundColor: "#f7f7f7",
                },
              }}
            >
              <Stack.Screen
                name="MealCategories"
                // component={CategoriesScreen}
                component={DrawerNavigator}
                options={{
                  // title: "All Categories",
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="MealsOverview"
                component={MealsOverviewScreen}
                // options={({ route, navigation }) => ({
                //   title: route.params.categoryTitle,
                // })}
              />
              <Stack.Screen name="MealDetail" component={MealDetailScreen} />
            </Stack.Navigator>
          </NavigationContainer>
        </Provider>
      </FavoritesContextProvider>
    </>
  );
}

export default App;
