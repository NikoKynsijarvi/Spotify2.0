import styled from "styled-components";

export const ResultsContainer = styled.div`
  height: 30%;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  column-gap: 1em;
  cursor: pointer;
`;

export const AlbumImg = styled.img`
  height: 70px;
  width: 70px;
`;

export const TrackContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const ArtistName = styled.h1`
  color: #ff6208;
  font-size: 30px;
`;

export const SongName = styled.h2`
  font-size: 20px;
`;
