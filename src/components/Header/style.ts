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
export const User = styled.ul`
  justify-content: center;
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  > div {
    display: flex;
    align-items: center;
    > svg:nth-child(1) {
      margin-right: 10px;
    }
    > svg:nth-child(3) {
      margin-left: 10px;
    }
  }
  li {
    margin-top: 20px;
  }
  input {
    padding: 10px;
    border: none;
    background-color: var(--white);
    font-size: 1rem;
    margin-top: 10px;
  }
  select {
    padding: 10px;
    border: none;
    background-color: var(--white);
    font-size: 1rem;
    margin-top: 10px;
  }
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 75vh;
  align-items: center;
  button {
    width: 150px;
    height: 50px;
  }
`;
