import React from "react";
import { StyleSheet, Text as RNText, View } from "react-native";
import { presets } from "./text_preset";
export default function Text({ children, preset = "default", style }) {
  const textStyles = StyleSheet.compose(presets[preset], style);
  return (
    <View>
      <RNText style={textStyles}>{children}</RNText>
    </View>
  );
}
