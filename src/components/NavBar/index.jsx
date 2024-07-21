import { Link } from "react-router-dom";

function NavBar() {
    return (
        <nav className=" flex  items-center justify-around w-full h-40 shadow-md  ">
           <ul className="flex w-[20rem ] justify-around">
                <li>
                <Link to="/" className="mx-8 text-gray-500 text-md font-serif hover:text-gray-950"> INÍCIO</Link>
                    
                </li>
                <li>
                <Link to="/portifolio" className="mx-8 text-gray-500 text-md font-serif hover:text-gray-950">PORTIFOLIO</Link>
                    
                </li>
                <li>
                <Link to="/sobre" className="mx-8 text-gray-500 text-md font-serif hover:text-gray-950">SOBRE</Link>
                    
                </li>
           </ul>



            <div className="flex items-center justify-center w-[40rem] h-[5rem] ">
                    <h1 className="text-4-1 font-serif text-gray-500">Robert Roger</h1>
            </div>
        </nav>
      );
}

export default NavBar;
