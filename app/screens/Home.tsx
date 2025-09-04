import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { ScreenView } from '@app/components';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default function Home(): JSX.Element {
  return (
    <ScreenView styles={styles.container}>
      <Text>Welcome</Text>
    </ScreenView>
  );
}
