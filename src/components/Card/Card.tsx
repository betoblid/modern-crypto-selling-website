import React from "react";
import Button from "../Button";


interface CardProps {
  
        
            id: number;
            title: string;
            thumb: string;
            classe: string;
            price: string;
        
   

}
const Card = ({ classe, id, price, thumb, title }: CardProps) => {

    
    return (
        <div className="card p-6 w-72 bg-white-card rounded-lg xl:w-[320px] xsmall:w-10/12">
            <figure>
                <img
                    src={thumb}
                    alt="o4AfNX.png"
                    className="w-72 h-80 xsmall:w-full xsmall:h-auto" />
            </figure>

            <div className="my-3">
                <div className="flex flex-row items-center justify-between">
                    <div>
                        <h3 className="text-zinc-100 text-lg font-semibold xsmall:text-sm">
                            {title}
                        </h3>
                    </div>
                    <div>
                        <p className="flex items-center justify-center  xsmall:text-sm">
                            <img
                                src="https://a.imagem.app/o4bxha.png"
                                alt=""
                                className="w-6 h-6 xsmall:w-4 xsmall:h-4" />
                            <p className="text-zinc-100 font-semibold">
                                {price}
                            </p>
                        </p>
                    </div>
                </div>
                <figure>
                    <img
                        src={classe}
                        alt="classe da NFT"
                        title="classe da NFT"
                        className="w-24  xsmall:w-20 " />
                </figure>
            </div>

            <div className="box-btn items-center justify-center flex-col w-full ">
                <Button
                    key={`btn-${id}`}
                    text="Buy Product"
                    style_option="btn-gradient-global w-full  xsmall:text-xs" />
            </div>
        </div>
    );
}

export default Card;

