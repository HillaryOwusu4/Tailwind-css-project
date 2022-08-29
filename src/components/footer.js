const  Footer = () => {
    return (<div className="w-full h-screen bg-primary flex justify-center">

       <div className="w-4/5 h-full  flex">
        <div className="w-1/2 h-full flex justify-center items-center">
        <img src="./images/MyMP3Pool__DJ_Music_Website_Design_Case_Studys-removebg-preview.png" alt="" className="h-full w-full "/>
        </div>
        <div className="w-1/2 h-full">
            <div className="w-full h-40 flex flex-col justify-end text-3xl font-bold text-white border-b border-white"><span >Based on the survey  </span><span className="block">results we've made a list</span><span>of users need</span></div>
            <div className="h-3/5 w-full relative">
                <ul className="mt-6">
                    <li className="list-disc list-inside text-blue-400 mt-6">
                        <span className="text-white">Convenient Search with autocomplete tips</span> </li>
                       <li  className="list-disc mt-6 list-inside text-blue-400"> <span className="text-white">Different ways to download a song</span></li>
                      <li  className="list-disc mt-6 list-inside text-blue-400">  <span className="text-white">Download whole playlist to a sing;e file</span></li>
                        <li className="list-disc mt-6 list-inside text-blue-400"><span className="text-white">Nice preview of songs and movies</span></li>
                       <li className="list-disc mt-6 list-inside text-blue-400"> <span className="text-white">Different color scheme</span></li>
                      <li className="list-disc mt-6 list-inside text-blue-400">  <span className="text-white">Properly taged songs</span></li>
                   
                </ul>
            </div>
        </div>

       </div>
    </div> );
}
 
export default Footer;