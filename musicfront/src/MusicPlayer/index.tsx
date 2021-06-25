import React, { useState, useEffect } from "react";
import { PlayerContainer } from "./PlayerElements";
import SpotifyPlayer from "react-spotify-web-playback";

export default function MusicPlayer({
  accesToken,
  songUri,
}: {
  accesToken: string;
  songUri: string;
}) {
  const [play, setPlay] = useState<boolean>(false);

  useEffect(() => {
    setPlay(true);
  }, [songUri]);
  if (!accesToken) return null;
  return (
    <PlayerContainer>
      {" "}
      <SpotifyPlayer
        token={accesToken}
        showSaveIcon={true}
        callback={(state) => {
          if (!state.isPlaying) {
            setPlay(false);
          }
        }}
        play={play}
        uris={songUri ? [songUri] : []}
        styles={{
          activeColor: "#1b75fd",
          bgColor: "#ffffff",
          color: "#000000",
          loaderColor: "#fff",
          sliderColor: " #ff6208",
          trackArtistColor: "#000000",
          trackNameColor: "#000000",
        }}
      />
    </PlayerContainer>
  );
}
