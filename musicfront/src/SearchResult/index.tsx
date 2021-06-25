import React from "react";
import {
  ResultsContainer,
  AlbumImg,
  TrackContainer,
  ArtistName,
  SongName,
} from "./SearchResultElements";

interface SearchResult {
  artist: string;
  trackTitle: string;
  uri: string;
  albumUrl: string;
}

export default function SearchResult({
  artist,
  trackTitle,
  uri,
  albumUrl,
  setSelectedTrack,
  setSearch,
}: {
  artist: string;
  trackTitle: string;
  uri: string;
  albumUrl: string;
  setSelectedTrack: any;
  setSearch: any;
}) {
  const handleClick = () => {
    setSelectedTrack({
      artist: artist,
      trackTitle: trackTitle,
      uri: uri,
      albumUrl: albumUrl,
    });
    setSearch("");
  };

  return (
    <ResultsContainer onClick={handleClick}>
      <AlbumImg src={albumUrl} />
      <TrackContainer>
        <ArtistName>{artist}</ArtistName>
        <SongName>{trackTitle}</SongName>
      </TrackContainer>
    </ResultsContainer>
  );
}
