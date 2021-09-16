import styled from "styled-components";

export const Container = styled.ul`
  max-width: 1280px;

  margin: 0 auto;
  padding: 5px 20px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;

  li {
    list-style: none;

    img {
      width: 75px;
      height: 65px;
      cursor: pointer;
    }
  }
`;
