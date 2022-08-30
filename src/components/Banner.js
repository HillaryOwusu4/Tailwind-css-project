const Banner = () => {

    let banners = [{name:'John Smith',content:"Club Dj",info:"Performs in clubs and needs to know what is trending in the music industry",src:"./images/Adidas X Ninja - Time In.png"},{
        name:'Connie Willson',content:"Mobile Dj",info:"Performs in clubs and needs to know what is trending in the music industry",src:"./images/Lucy-S-Magazine.png"
    },{name:'Morris Watson',content:"Radio Dj",info:"Works on the radio neesd a fresh quality sound",src:"./images/3fea0d07-a683-4b36-8f17-cc3d02b180a8.png"}]
   
     
    
    return ( <div className="w-full h-screen bg-primary flex justify-center">
<div className="w-4/5 h-2/3  flex">
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

    {banners.map((bloogs) =>{
        return (<div className="flex flex-col  justify-center">
        <div className="flex flex-col  justify-center"> <img src={bloogs.src} alt="pic" className="w-16 h-16 rounded-full object-cover"/>
         <span className="mt-4 text-white">{bloogs.name}</span>
         <span className="mt-1 text-nude">{bloogs.content}</span>
         <span className="mt-2 text-nude text-sm ">{bloogs.info}</span></div></div>)
    })}


        </div>
    </div>
</div>
    </div> );
}
 
export default Banner;