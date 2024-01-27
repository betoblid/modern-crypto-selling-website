import React from "react";
import Slider from 'react-slick'
import { UseConfig } from "./Carrocel_config";

const Carrosel = () => {

   const { settings } = UseConfig()

    return (
        <Slider {...settings}>
            <div >
                <img src="https://a.imagem.app/o4bpwN.png" alt="o4bpwN.png"  className="w-15"/>
            </div>
            <div>
                <img src="https://a.imagem.app/o4o8aC.png" alt="o4o8aC.png" className="w-15" />
            </div>
            <div>
                <img src="https://a.imagem.app/o4obzY.png" alt="o4obzY.png"  className="w-15"/>
            </div>
            <div>
                <img src="https://a.imagem.app/o4ooja.png" alt="o4ooja.png" className="w-15" />
            </div>
            <div>
                <img src="https://a.imagem.app/o4o3v9.png" alt="o4o3v9.png" className="w-15" />
            </div>
            <div>
                <img src="https://a.imagem.app/o4oGBk.png" alt="o4oGBk.png" className="w-15" />
            </div>
        </Slider>
    );
}
export default Carrosel;
