import { StyleSheet, TouchableOpacity, Text } from "react-native";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { router, Stack, useLocalSearchParams } from "expo-router";
import { useLayoutEffect } from "react";
import CategoryAnimatedHeader from "@/components/CategoryAnimatedHeader";

export default function CategoryScreen() {
  const params = useLocalSearchParams();
  const collectionSlug = params["collection-slug"];
  //   const router = useRouter();
  //   const options = {
  //     headerLeft: () => (
  //       <TouchableOpacity onPress={() => router.back()}>
  //         <Text>Back</Text>
  //       </TouchableOpacity>
  //     ),
  //   };
  //   useLayoutEffect(() => {
  //     router.setParams({ options });
  //   }, []);

  return (
    <ThemedView style={styles.container}>
      <Stack.Screen
        options={{
          header: () => (
            <CategoryAnimatedHeader
              title={collectionSlug}
              isScrolled={false}
              setIsScrolled={() => {}}
            />
          ),
        }}
      />
      <ThemedText type="title">Hello {collectionSlug}</ThemedText>
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
