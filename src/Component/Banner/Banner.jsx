
import { GrSecure } from "react-icons/gr";
import BiryaniImg from "../../assets/biryani5.png";
import Vector from "../../assets/vector3.png";
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";

const Banner = () => {

    const bgImage = {
        backgroundImage: `url(${Vector})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "100%",
        width: "100%",
    };

  return (
    <div>
        <div>
            <div>
                <div>
                    {/*Image Banner*/}
                    <div>
                        <img src={BiryaniImg} alt="image" />
                    </div>
                    {/* text content section */}
                    <div>
                        <h1>
                            Lorem, ipsum dolor.
                        </h1>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                            Eaque reiciendis inventore iste ratione ex alias quis magni at
                            option.
                            <br />
                            <br />
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Beatae ab sed, exercitationem minima aliquid eligendi
                            distinctio? Fugit repudiandae numquam hic quo recusandae.
                            Excepturi totam ad nam velit quasi quidem aspernatur.
                        </p>
                        <div>
                            <div>
                                <GrSecure />
                            </div>
                            <div>
                                <IoFastFood />
                            </div>
                            <div>
                                <GiFoodTruck />
                            </div>
                        </div>
                        <div>
                            <button className="bg-gradient-to-r from-primary to-secondary text-white py-2 px-4 rounded-full shadow-xl hover:shadow-md">
                                Order Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Banner
