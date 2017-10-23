import React from 'react';

import { WebView } from 'react-native';

export default function WebScreen() {
  return (
    <WebView
      source={{ uri: 'https://github.com/facebook/react-native' }}
      style={{ marginTop: 20 }}
    />
  );
}
