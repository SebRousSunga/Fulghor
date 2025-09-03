import React, {useEffect, useState} from "react";
import axios from 'axios';

function UserChoice(){  
     // weird default choices, just ignore these.
      const [song,setSong] = useState('');
      const [userSong,setUserSong] = useState('');
      const [artist,setArtist] = useState('');


      const handleSongChange = (e: React.KeyboardEvent<HTMLElement>) =>{
           if(e.key === "Enter"){
              setUserSong(song);
           }
      }
  

      const findTheSongs = async ( userSong: string) =>{
          
            
          
          try{
            const response = await axios.post(`${import.meta.env.VITE_REACT_URL}/test`,{song: userSong },{withCredentials: true});
            if(response.status === 201){
                console.log("Successfully sent song choice!");
            }
          }catch(err) {
             console.error("Error: " + err);
          }
      }

      useEffect(() => {},[userSong])

    return (
        <>
        <div className="flex flex-row  h-150 justify-between bg-grey-700 w-275 mr-50 p-0 rounded-md shadow-lg">
           <section className="w-fill h-[75%]">
        <div className="w-150 h-[65%] flex flex-col bg-stone-200 p-0.5 m-5 border-red-500 rounded-md shadow-lg">
              <p className="mr-50 mt-5 Bolded font-vens text-lg border-b-indigo-500">Select your song to recommend on:</p>
              
              <label htmlFor="songinput" className="font tex-test-md mr-200 ml-5 mt-2 mb-2">Song:</label>
              <input id="songinput" className="rounded-md w-[50%] h-[8  0%] m-0 border-2 transition: background-color 0.5s hover:border-purple-500 ml-5 color-white " 
              type="text"
              onChange= {(e)=> {setSong(e.target.value)}}
              onKeyDown={handleSongChange} />
              <p className="color-grey font-inter underline mr-125 text-lg rounded-full mt-5">or</p>
              
              
        </div>

        <div className="w-150 h-[65%] flex flex-col bg-stone-200  p-0.5 m-5 rounded-md shadow-lg">
             <p>{userSong}</p>
        </div>
        </section>
          <div className="w-500 h-100  p-20 m-32.5   ">
                  <button className=" h-full w-full m-auto font-inter rounded-md shadow-xl"  
                   onClick={() => { findTheSongs(userSong)}}> 
                     Find recommendations!
                  </button>
          </div>
        </div>
        </>
    )

}



export default UserChoice;