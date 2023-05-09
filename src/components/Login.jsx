import React from 'react'
import styled from "styled-components";
export default function Login() {
  const handleClick=()=>{
    const clientId="e684d999ed7e44d09e283d889f8f808e";
    const redirectUrl="http://localhost:3000/";
    const apiUrl="https://accounts.spotify.com/authorize";
    const scope=[
    "user-read-email",
    "user-read-private",
    "user-read-playback-state",
    "user-modify-playback-state",
    "user-read-currently-playing",
    "user-read-playback-position",
    "user-top-read",
    "user-read-recently-played",
    "playlist-modify-public",
    "playlist-modify-private"
    ];
    window.location.href=`${apiUrl}?client_id=${clientId}&redirect_uri=${redirectUrl}&scope=${scope.join(
      " "
    )}&response_type=token&show_dialog=true`;
  };
  return (
    <Container>
      <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Green.png" alt="Spotify"/>
      <button onClick={handleClick}>Connect Spotify</button>
  
    </Container>
  )
}

const Container=styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  height:100vh;
  width:100vw;
  background-image:url("https://images.unsplash.com/photo-1453090927415-5f45085b65c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1148&q=80"); 
  background-repeat:round;
  gap:5rem;
  img{
    height:20vh;
  }
  
 button{
    padding: 1rem 5rem;
    border-radius:5rem;
    border:none;
    font-weight:700;
    background:white;
    color:black;
    font-size:1.1em;
    cursor:pointer;
  }
`;