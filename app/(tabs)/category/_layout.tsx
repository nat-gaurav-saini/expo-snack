import { Stack } from "expo-router";

export default function CategoryLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Category",
        }}
      />
      <Stack.Screen
        name="[category-slug]/[collection-slug]/index"
        options={{
          title: "Collection",
        }}
      />
      <Stack.Screen
        name="[category-slug]/index"
        options={{
          title: "Category",
        }}
      />
    </Stack>
  );
}
