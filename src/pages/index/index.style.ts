import { View } from "@tarojs/components";
import { styled } from "linaria/lib/react";
import { View as RNView } from "react-native";

export const TitleRN = styled(RNView as any)`
  font-family: sans-serif;
  font-size: 48px;
  color: red;
`;

export const Title = styled(View)`
  font-family: sans-serif;
  font-size: 48px;
  color: red;
`;

export const Wrapper = styled(View)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export const Red = styled(View)`
  color: red;
`;
