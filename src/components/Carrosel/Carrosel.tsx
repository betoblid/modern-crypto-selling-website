import React from "react";
import Slider from 'react-slick'
import { UseConfig } from "./Carrocel_config";

const Carrosel = () => {

   const { settings } = UseConfig()

    return (
        <Slider {...settings}>
            <div >
                <img src="https://a.imagem.app/o4bpwN.png" alt="Patrocinador" title="Patrocinador" className="w-15"/>
            </div>
            <div>
                <img src="https://a.imagem.app/o4o8aC.png" alt="Patrocinador" title="Patrocinador" className="w-15" />
            </div>
            <div>
                <img src="https://a.imagem.app/o4obzY.png" alt="Patrocinador" title="Patrocinador"  className="w-15"/>
            </div>
            <div>
                <img src="https://a.imagem.app/o4ooja.png" alt="Patrocinador" title="Patrocinador" className="w-15" />
            </div>
            <div>
                <img src="https://a.imagem.app/o4o3v9.png" alt="Patrocinador" title="Patrocinador" className="w-15" />
            </div>
            <div>
                <img src="https://a.imagem.app/o4oGBk.png" alt="Patrocinador" title="Patrocinador" className="w-15" />
            </div>
        </Slider>
    );
}
export default Carrosel;
