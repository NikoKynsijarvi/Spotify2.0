import React, { useState, useEffect } from "react";
import SearchResult from "../SearchResult";
import useAuth from "../useAuth";
import MusicPlayer from "../MusicPlayer";
import SongInfo from "../SongInfo";
import {
  SearchContainer,
  SearchForm,
  SearchInput,
  MainContainer,
  ResultsElements,
  LogOutContainer,
} from "./MainElements";
import NavBar from "../Navbar";
import SpotifyWebApi from "spotify-web-api-node";
import { FiLogOut } from "react-icons/fi";
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

  const logOut = () => {
    window.location.href = "/";
  };

  const styles = { color: "white", height: "30px", width: "30px" };

  return (
    <>
      <MainContainer>
        <LogOutContainer onClick={logOut}>
          <FiLogOut style={styles} />
          <h3>Log out</h3>
        </LogOutContainer>
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
        {search.length > 0 ? (
          <ResultsElements>
            {results!.map((r) => (
              <SearchResult
                key={r.uri}
                uri={r.uri}
                artist={r.artist}
                albumUrl={r.albumUrl}
                trackTitle={r.trackTitle}
                setSelectedTrack={setSelectedTrack}
                setSearch={setSearch}
              />
            ))}
          </ResultsElements>
        ) : (
          <SongInfo
            artist={selectedTrack.artist}
            albumUrl={selectedTrack.albumUrl}
            trackTitle={selectedTrack.trackTitle}
          />
        )}

        {accesToken ? (
          <MusicPlayer accesToken={accesToken} songUri={selectedTrack.uri} />
        ) : (
          <div></div>
        )}
        <NavBar />
      </MainContainer>
    </>
  );
}
