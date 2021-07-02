import React from "react";

function SongInfo({
  artist,
  trackTitle,
  uri,
  albumUrl,
}: {
  artist: string;
  trackTitle: string;
  uri: string;
  albumUrl: string;
}) {
  return (
    <div>
      <h1>{trackTitle}</h1>
    </div>
  );
}

export default SongInfo;
