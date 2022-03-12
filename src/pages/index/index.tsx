import React from "react";
import { Text } from "react-native";
import { Red, Title, TitleRN, Wrapper } from "./index.style";
// import "./index.css";

export default function Index() {
  return (
    <Wrapper className='index'>
      <Title>Hello World</Title>
      <Red>红色测试</Red>
      {process.env.TARO_ENV === "rn" && (
        <TitleRN >
          <Text>Hello React Native</Text>
        </TitleRN>
      )}
    </Wrapper>
  );
}
