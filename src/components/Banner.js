const Banner = () => {
    return ( <div className="w-full h-screen bg-primary flex justify-center">
<div className="w-4/5 h-2/3 -400 flex">
    <div className="w-2/5 h-full flex justify-center">
        <img src="./images/MyMP3Pool__DJ_Music_Website_Design_Case_Study-removebg-preview.png"/>
    </div>
    <div className="w-3/5 h-full">
        <div className="w-full h-32 flex justify-between items-end pb-3 border-b border-white">
            <div>
                <span className="block text-2xl text-white font-bold">Who are ?</span>
                <span className="block text-2xl text-white font-bold">Our users</span>
            </div>
            <div>
                <span className="text-white">we've created user response</span>
                
            </div>
        </div>
        <div className="w-full h-56 grid grid-cols-3 gap-12 mt-20">
<div className="flex flex-col  justify-center  ">
    <img src="./images/Adidas X Ninja - Time In.png" alt="pic" className="w-16 h-16 rounded-full "/>
    <span className="mt-4 text-white">John Smith</span>
    <span className="mt-1 text-nude">Club Dj</span>
    <span className="mt-2 text-nude text-sm ">Performs in clubs and needs to know what is trending in the music industry</span>
</div>
<div className="flex flex-col  justify-center"> <img src="./images/Lucy-S-Magazine.png" alt="pic" className="w-16 h-16 rounded-full object-cover"/>
    <span className="mt-4 text-white">Connie Willson</span>
    <span className="mt-1 text-nude">Mobile Dj</span>
    <span className="mt-2 text-nude text-sm ">Performs in clubs and must keep abrest of the latest trending in twon</span></div>
<div className=" flex flex-col  justify-center mb-3"><img src="./images/3fea0d07-a683-4b36-8f17-cc3d02b180a8.png" alt="pic" className="w-16 h-16 rounded-full object-cover"/>
    <span className="mt-4 text-white">  Morris Watson</span>
    <span className="mt-1 text-nude">Radio Dj</span>
    <span className="mt-2 text-nude text-sm ">Works on the radio neesd a fresh quality sound</span></div>
        </div>
    </div>
</div>
    </div> );
}
 
export default Banner;