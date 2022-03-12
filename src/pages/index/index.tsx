import React from "react";
import { Text } from "react-native";
import { Red, Title, TitleRN, Wrapper } from "./index.style";
// import "./index.css";

export default function Index() {
  return (
    <Wrapper className='index'>
      <Title>Hello World</Title>
      {process.env.TARO_ENV !== "rn" && <Red>红色测试</Red>}
      {process.env.TARO_ENV === "rn" && (
        <TitleRN className='test'>
          <Text style={{ color: "red" }}>Hello React Native</Text>
        </TitleRN>
      )}
    </Wrapper>
  );
}
