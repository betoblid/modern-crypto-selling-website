import React from "react";


interface NFTProps {

    title: string,
    description: string,
    thumb: string
}
const CardNFT = ({ description, thumb, title }: NFTProps) => {

    return (
        <div className="text-zinc-100 bg-blue-light w-[600px] rounded-2xl relative py-10 px-6 xsmall:w-full small:w-11/12 2xl:w-[800px]">

            <div className="absolute -right-2 -top-1 bg-blue-dark p-4 rounded-xl">
                <img
                    src={thumb}
                    alt={title} className="w-12 h-12" title={`icon ${title}`} />
            </div>

            <div>
                <h3
                    className="font-poppins font-bold text-xl">
                    {title}
                </h3>
                <p className="font-questrial text-justify py-4" title="descrição">
                    {description}
                </p>
            </div>
        </div>
    );
}
export default CardNFT;