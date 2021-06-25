import React from "react";
import { LinkText, SpotifyLink, LoginContainer } from "./LoginElements";

const AUTH_URL =
  "https://accounts.spotify.com/authorize?client_id=e37d4bccd4ce41d88a802dcfd428785a&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state";

export default function Login() {
  return (
    <LoginContainer>
      <SpotifyLink href={AUTH_URL}>
        <LinkText>Login with Spotify</LinkText>
      </SpotifyLink>
    </LoginContainer>
  );
}
