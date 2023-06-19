import { Link } from "react-router-dom";
import woman from "../../public/woman.png"

const Hero = () => {
  return <section className="bg-pink-200 h-[710px] bg-hero bg-no-repeat bg-cover bg-center py-26">
          <div className="container mx-auto flex justify-around h-full">
            <div className="flex flex-col justify-center">
              <div className="font-semibold flex items-center uppercase">
                <div className="w-10 h-[2px] bg-red-500 mr-3"></div>Nueva Colección
              </div>
              <h1 className="text-[70px] leading-[1.1] font-light mb-4">DESCUBRE TU ESTILO<br />
              <span className="font-semibold">PRIMAVERA</span></h1>
              <Link to={'/'} className="self-start neutral-800 uppercase font-semibold border-b-2 border-neutral-800">
                Mas Información
              </Link>
            </div>
            <div>
              <img className="object-contain lg:block" src={woman} alt="" />
            </div>
          </div>
        </section>;
};

export default Hero;
