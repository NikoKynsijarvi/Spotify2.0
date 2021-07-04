import styled from "styled-components";

export const InfoContainer = styled.div`
  height: 600px;
  width: 100%;
  overflow-wrap: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: none;

  @media (max-width: 600px) {
    width: 200px;
  }
`;

export const TrackName = styled.h1`
  font-size: 40px;
`;

export const Artist = styled.h2`
  font-size: 35px;
`;

export const AlbumImg = styled.img`
  height: 100px;
  width: 100px;
`;
