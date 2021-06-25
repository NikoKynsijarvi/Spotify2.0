import React, { useState, useEffect } from "react";
import SearchResult from "../SearchResult";
import useAuth from "../useAuth";
import MusicPlayer from "../MusicPlayer";
import {
  SearchContainer,
  SearchForm,
  SearchInput,
  MainContainer,
  ResultsElements,
  NavContainer,
} from "./MainElements";
import SpotifyWebApi from "spotify-web-api-node";
import * as dotenv from "dotenv";
dotenv.config();

const spotifyWebApi = new SpotifyWebApi({
  clientId: process.env.CLIENT_ID,
});

interface SearchResult {
  artist: string;
  trackTitle: string;
  uri: string;
  albumUrl: string;
}

export default function MainSection({ code }: { code: string }) {
  const [search, setSearch] = useState<string>("");
  const [results, setResults] = useState<SearchResult[] | undefined>([]);
  const [selectedTrack, setSelectedTrack] = useState<SearchResult>({
    artist: "",
    trackTitle: "",
    uri: "",
    albumUrl: "",
  });
  const accesToken: string | undefined = useAuth(code);
  console.log(selectedTrack);

  useEffect(() => {
    if (!accesToken) return;
    spotifyWebApi.setAccessToken(accesToken);
  }, [accesToken]);

  useEffect(() => {
    if (!search) return setResults([]);
    if (!accesToken) return;
    spotifyWebApi.searchTracks(search).then((res) => {
      setResults(
        res.body.tracks?.items.map((track) => {
          const smallest = track.album.images.sort(
            (a, b) => a.height! - b.height!
          );
          return {
            artist: track.artists[0].name,
            trackTitle: track.name,
            uri: track.uri,
            albumUrl: smallest[0].url,
          };
        })
      );
    });
  }, [search, accesToken]);

  return (
    <>
      <MainContainer>
        <SearchContainer>
          <SearchForm>
            <SearchInput
              placeholder="Search here"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
          </SearchForm>
        </SearchContainer>
        <ResultsElements>
          {results ? (
            results.map((r) => (
              <SearchResult
                key={r.uri}
                uri={r.uri}
                artist={r.artist}
                albumUrl={r.albumUrl}
                trackTitle={r.trackTitle}
                setSelectedTrack={setSelectedTrack}
                setSearch={setSearch}
              />
            ))
          ) : (
            <div></div>
          )}
        </ResultsElements>
        {accesToken ? (
          <MusicPlayer accesToken={accesToken} songUri={selectedTrack.uri} />
        ) : (
          <div></div>
        )}
        <NavContainer />
      </MainContainer>
    </>
  );
}
