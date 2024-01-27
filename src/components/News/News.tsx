import React from "react";
import Button from "../Button";

const News = () => {

    return (
        <section
            className="flex items-center justify-center w-full text-zinc-100 gap-2 my-10 xsmall:flex-col small:flex-col">

            <div
                className="ml-3 xsmall:mb-3 small:mb-5 small:text-center xsmall:text-center">
                <img
                    src="https://a.imagem.app/o47jN9.png"
                    alt="o47jN9.png"
                    className="w-10 h-10 small:mx-auto xsmall:mx-auto" />

                <h2
                    className="font-block-han text-3xl py-5 md:text-2xl" >
                    <span className="text-cyan-500 font-questrial">Trending</span> Crypto Market News
                </h2>

                <p
                    className="text-lg w-3/4 mb-4 xsmall:w-full small:w-11/12 xsmall:text-sm md:w-full md:text-sm ">
                    Set a secondary sales fee and add social links, a description, profile and banner images, and a description.
                </p>
                <Button
                    text="Explore NFTs"
                    style_option="btn-gradient-global tracking-wide mt-3 " />
            </div>

            <div>
                <figure>
                    <img
                        src="https://a.imagem.app/o47Jua.png"
                        alt="Photo NFT"
                        title="Photo NFT"
                        className="mb-2 w-80 h-52 small:w-96 small:h-auto xsmall:w-full xsmall:h-auto md:h-auto" />
                    <figcaption
                        className="font-questrial text-white-pasit ">
                        April 18, 2022
                    </figcaption>
                </figure>
                <h3
                    className="text-xl font-poppins font-bold my-3 xsmall:text-lg xsmall:my-1  md:text-sm">
                    Few Reasons to Sell NFTs on Nico
                </h3>
            </div>

            <div>

                <figure>
                    <img
                        src="https://a.imagem.app/o47q6Y.png"
                        alt="photo NFT"
                        title="Photo NFT"
                        className="mb-2 w-80 h-52 small:w-96 small:h-auto xsmall:w-full xsmall:h-auto  md:h-auto" />
                    <figcaption
                        className="font-questrial text-white-pasit">
                        April 18, 2022</figcaption>
                </figure>
                <h3
                    className="text-xl font-poppins font-bold my-3  xsmall:text-lg xsmall:my-1 md:text-sm">
                    Few Reasons to Sell NFTs on Nico
                </h3>
            </div>

        </section>
    )
}
export default News;