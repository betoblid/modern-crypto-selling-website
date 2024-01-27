import React from "react";
import Button from "../Button";

const Banner = () => {

    return (
        <section>
            <div className="flex items-center justify-between max-w-[1440px] xl:mx-auto 2xl:mx-auto small:flex-col-reverse xsmall:flex-col-reverse ">
                <div className="w-2/4 ml-10 md:ml-2 small:w-full xsmall:w-full small:flex small:flex-col small:items-center xsmall:px-2 xsmall:w-full">

                    <h1
                        className="font-block-han text-zinc-100 text-7xl lg:text-5xl md:text-5xl small:text-4xl xsmall:text-3xl">
                        Buy, Create & Sell <span className="text-cyan-400 font-questrial">Unique NFTs</span> File.
                    </h1>

                    <p className="font-questrial text-white-pasit text-lg w-3/4 xsmall:w-full xsmall:mb-4 mt-6 lg:w-11/12 md:w-11/12">
                        NFTs are used for digital art and collectibles, GameFi projects, metaverses, and more.
                    </p>

                    <Button
                        text="Explore NFTs"
                        style_option="btn-gradient-global tracking-wide mt-3" />

                    <div className="my-10 w-full small:flex small:items-center small:justify-center small:flex-col small:gap-6 xsmall:flex xsmall:items-center xsmall:justify-center xsmall:flex-col">
                        <h2
                            className="text-zinc-100 text-2xl font-bold flex items-center md:text-xl xsmall:text-lg">
                            <img
                                src="https://a.imagem.app/o48bkW.png"
                                alt="o48bkW.png"
                                className="w-10 xsmall:w-6" />
                            Nico NFT Marketplace Overview
                        </h2>

                        <ul 
                        className="flex items-center flex-row space-x-5 md:w-full small:flex small:items-center small:justify-center xsmall:flex-col xsmall:gap-6 xsmall:text-center xsmall:mt-7">
                            <li>
                                <h3 className="text-sm text-white-pasit md:text-[13px] xsmall:text-lg">World Arts</h3>
                                <p className="text-xl text-zinc-100 font-bold md:text-lg xsmall:text-lg">30.000 +</p>
                            </li>
                            <li>
                                <h3 className="text-sm text-white-pasit md:text-[13px] xsmall:text-lg">Digital Artists</h3>
                                <p className="text-xl text-zinc-100 font-bold md:text-lg xsmall:text-lg">17.000 +</p>
                            </li>
                            <li>
                           
                                <h3 className="text-sm text-white-pasit md:text-[13px]  xsmall:text-lg">Live Auctions</h3>
                                <p className="text-xl text-zinc-100 font-bold md:text-lg xsmall:text-lg">22.000 +</p>
                            </li>
                            <li>
                                
                                <h3 className="text-sm text-white-pasit  md:text-[11px] xsmall:text-lg">Unique Products</h3>
                                <p className="text-xl text-zinc-100 font-bold md:text-lg xsmall:text-lg">50.000 +</p>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="w-2/4 flex justify-end items-end mt-10 small:w-full xsmall:w-full" >

                    <figure className="small:w-3/4 xsmall:3/4" >
                        <img
                            src="https://a.imagem.app/oVOjl0.png"
                            alt="Banner NFT"
                            title="Banner NFT"
                            className="w-full" />
                    </figure>
                </div>
            </div>

        </section>

    );
}
export default Banner;
