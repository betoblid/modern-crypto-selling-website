import React from "react";
import Button from "../Button";

const Category = () => {

    return (
        <section
            className="my-16 ">
            <div>
                <h2
                    className="text-3xl text-cyan-500 text-center font-questrial">
                    Browse by
                    <span className="font-block-han text-zinc-100 ml-2">Category </span>
                </h2>

                <p
                    className="font-questrial text-zinc-100 text-balance text-center w-6/12 mx-auto my-5 xsmall:w-full xsmall:text-sm small:w-10/12">
                    Set a secondary sales fee and add social links, a description, profile and banner images, and a description.
                </p>
            </div>
            <figure>
                <img
                    src="https://a.imagem.app/o4bMaS.png"
                    alt="Icon Category"
                    className="w-3/4 mx-auto xsmall:w-11/12 small:w-10/12" />
            </figure>

            <div className="flex justify-center items-center my-5">
                <Button
                    key={"category"}
                    text="Explore NFTs Category"
                    style_option="border-2 border-pink-light border-r-purple-light bg-white-pasit " />
            </div>

        </section>
    );
}

export default Category;