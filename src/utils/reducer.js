import { reducerCases } from "./Constants";

export const initialState={
    token:null,
    playlists:[],
    userInfo:null,
    selectedPlaylistId: "3cEYpjA9oz9GiPac4AsH4n",
    selectedPlaylist:null,
    playerState:false,
};

const reducer=(state,action)=>{
    switch(action.type){
        case reducerCases.SET_TOKEN: {
            return{
                ...state,
                token:action.token,
            };
        }
        case reducerCases.SET_PLAYLIST:{
            return {
              ...state,
              playlists: action.playlists,
            };
        }
        case reducerCases.SET_USER:{
            return {
                ...state,
                userInfo:action.userInfo,
            }
        }
        case reducerCases.SET_PLAYLIST:{
            return{
                ...state,
                selectedPlaylist:action.selectedPlaylist,
            };
        }
        case reducerCases.SET_PLAYER_STATE:{
            return{
                ...state,
                playerState:action.playerState,
            };
        }
        case reducerCases.SET_PLAYLIST_ID:{
            return{
                ...state,
                selectedPlaylistId:action.selectedPlaylistId,
            };
        }
        default:
            return state;
    }
};

export default reducer;