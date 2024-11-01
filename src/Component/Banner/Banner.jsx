
import BiryaniImg from "../../assets/biryani5.png";
import Vector from "../../assets/vector3.png";

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
                </div>
            </div>
        </div>
    </div>
  )
}

export default Banner
