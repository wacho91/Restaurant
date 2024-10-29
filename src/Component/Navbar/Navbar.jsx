
import { FaCartShopping } from "react-icons/fa6";
import Logo from "../../assets/food-logo.png";

const Menu = [
    {
      id: 1,
      name: "Home",
      link: "/#",
    },
    {
      id: 2,
      name: "Services",
      link: "/#services",
    },
    {
      id: 3,
      name: "About",
      link: "/#about",
    },
];

const Navbar = () => {
  return (
    <div>
        <div>
            <div>
                <div>
                    <a href="#" className="font-bold text-2xl sm:text-3xl flex gap-2">
                        <img 
                            src={Logo} 
                            alt="Logo" 
                            className="w-10"    
                        />
                        Foodie
                    </a>
                </div>
                <div>
                    {/*DarkMode*/}
                    <div>

                    </div>
                    <ul>
                        {Menu.map((menu) => (
                            <li key={menu.id}>
                                <a href={menu.link}>
                                    {menu.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <button className="">
                        Order 
                        <FaCartShopping />
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar
