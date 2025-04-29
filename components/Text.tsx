import React from "react";
import styled from "styled-components/native";

interface TextStyleProps {
  color?: string;
  margin?: number;
  padding?: number;
  title?: boolean;
  large?: boolean;
  medium?: boolean;
  small?: boolean;
  tiny?: boolean;
  children: React.ReactNode;
}

const TextStyle: React.FC<TextStyleProps> = (props) => {
  return <Text {...props}>{props.children}</Text>;
};

const Text = styled.Text<TextStyleProps>`
  color: ${(props) => props.color ?? "#DBDBDB"};
  font-family: "Avenir";
  margin: ${(props) => props.margin ?? 0};
  padding: ${(props) => props.padding ?? 0};

  ${({ title, large, medium, small, tiny }) => {
    switch (true) {
      case title:
        return 'font-size: 32px';
      case large:
        return 'font-size: 18px';
      case medium:
        return 'font-size: 15px';
      case small:
        return 'font-size: 11px';
      case tiny:
        return 'font-size: 10px';
      default:
        return 'font-size: 14px'; // default size for text
    }
  }}
`;

export default TextStyle;
