import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';

const styleSheet = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
});

interface Props {
  styles?: StyleProp<ViewStyle>;
  children?: ReactComponent;
}

export default function ScreenView({ styles = {}, children = null }: Props): JSX.Element {
  return (
    <View style={typeof styles === 'object' ? { ...styleSheet.container, ...styles } : styleSheet.container}>
      {children}
      <StatusBar style="auto" />
    </View>
  );
}
