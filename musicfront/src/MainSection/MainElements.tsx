import styled from "styled-components";

export const MainContainer = styled.div`
  height: 99vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #fff;
`;

export const SearchContainer = styled.div`
  width: 50%;
  height: 30%;
  display: flex;
  justify-content: center;
`;
export const SearchForm = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;

export const SearchInput = styled.input`
  height: 30%;
  width: 70%;
  min-height: 20px;
  min-width: 100px;
  margin-top: 1em;
  border: 4px solid #ff6208;
  font-size: 30px;
`;

export const ResultsElements = styled.div`
  height: 100%;
  width: 40%;
  overflow-y: scroll;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  row-gap: 1em;
`;
