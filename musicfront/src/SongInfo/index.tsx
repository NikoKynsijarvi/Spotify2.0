import React from "react";
import { AlbumImg, InfoContainer, TrackName, Artist } from "./InfoElements";

function SongInfo({
  artist,
  trackTitle,

  albumUrl,
}: {
  artist: string;
  trackTitle: string;

  albumUrl: string;
}) {
  return (
    <InfoContainer>
      {albumUrl.length > 0 ? <AlbumImg src={albumUrl} /> : null}
      <TrackName>{trackTitle}</TrackName>
      <Artist>{artist}</Artist>
    </InfoContainer>
  );
}

export default SongInfo;
