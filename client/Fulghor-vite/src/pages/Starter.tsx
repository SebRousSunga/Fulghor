
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Starter(){
    return (
          <>
      <div className="w-150 h-150  rounded focus:ring-violet-500 shadow-md p-1.5">
          <div className="text-white w-fill h-25 flex-row">
                 <p className="mt-3 font-vens bolded text-3xl">Fulghor: A music recommendation website</p>
                 <p className="mt-10 font-inter bolded text-3xl border-t-5 mb-10 p-5">Find new music similar to your tastes: by song, album, band, or genre.</p>
                  
                  <div className="bg-red-500 w-50 h-50 m-auto rounded-[50%]  p-0 m-0 hover:animate-spin">
                 <a href="https://themurlocs.bandcamp.com/" id="link" className="hover:animate-pulse w-[100%] h-[100%] rounded-full inline-block bg-white"> 
                   
                    <FontAwesomeIcon icon="music" className="text-black mt-15 mr-2 text-7xl"/>
                     
                 </a>
                 </div>
                 <p className="font-inter text-2xl mt-2 p-5">Click to begin your search.</p>
          </div>
      </div>
      
    </>


    )
}











export default Starter;