import { StyleSheet } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function CategoryScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">Hello Category!</ThemedText>
      <ThemedText>Welcome to the category screen.</ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  }
});

