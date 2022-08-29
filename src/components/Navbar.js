const NavBar = () => {
    return ( <div className="w-full bg-secondary h-12 flex justify-center">
       <nav className="flex justify-between items-center p-2 w-5/6 h-12 ">
        <div className="">
<ul className="flex text-white">
    <li className="mr-7"><a>Projects</a></li>
    <li className="mr-7"><a>Services</a></li>
    <li className="mr-7"><a>About</a></li>
    <li className="mr-7"><a>Contact</a></li>
</ul>
        </div>
        <div > <span className=" uppercase text-white font-bold">Logobakery</span></div>
       </nav>
        </div> );
}
 
export default NavBar ;