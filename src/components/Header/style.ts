import styled from "styled-components";
export const Ul = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  li {
    list-style: none;
    margin: 20px;
    img {
      width: 75px;
      height: 65px;
      cursor: pointer;
    }
  }
`;
