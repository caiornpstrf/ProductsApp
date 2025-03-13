import React from 'react';
import { SafeAreaView, Text, Icon, Header } from '../components';

export function Test() {
  return (
    <SafeAreaView bg="primary" flex={1}>
      <Header title="Test" />
      <Text color="text-light">Test</Text>
      <Icon.Solid name="house" color="text-light" />
      <Icon.Regular name="comments" color="text-light" />
      <Icon.Brand name="apple" color="text-light" />
    </SafeAreaView>
  );
}
