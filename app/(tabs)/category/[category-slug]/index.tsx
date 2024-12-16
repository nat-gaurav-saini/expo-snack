import { StyleSheet } from "react-native";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Stack, useLocalSearchParams } from "expo-router";
import CategoryAnimatedHeader from "@/components/CategoryAnimatedHeader";

export default function CategoryScreen() {
  const params = useLocalSearchParams();
  const categorySlug = params["category-slug"];

  return (
    <ThemedView style={styles.container}>
      <Stack.Screen
        options={{
          header: () => (
            <CategoryAnimatedHeader
              title={categorySlug}
              isScrolled={false}
              setIsScrolled={() => {}}
            />
          ),
        }}
      />
      <ThemedText type="title">Hello {categorySlug}</ThemedText>
      <ThemedText>Welcome to the category screen.</ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
});
