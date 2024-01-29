import React from "react";
import Button from "../Button";
import db from "../../database/db.json"
import CardNFT from "../CardNFT";
const CreateNFT = () => {

    return (
        <section className=" my-14 ">

            <div className="flex justify-center items-center flex-col">
                <Button
                    text="Get in Touch"
                    style_option="border-2 rounded-full border-white-transparent border-r-zinc-900 px-3 py-1 my-10 bg-gradient-to-r from-[#1EE0E1] to-white-card " />

                <h2 className="font-block-han text-zinc-100 text-center text-3xl">
                    How to
                    <span className="font-questrial text-cyan-500 mx-2"> Create & Sell</span>
                    Your NFT Files.
                </h2>
            </div>

            <div
                className="flex justify-center items-center flex-row flex-wrap gap-4 mt-10 w-full max-w-[1640px] mx-auto 2xl:gap-8">
                {
                    db.Bonus.map((itens) => <CardNFT
                        key={itens.id}
                        description={itens.description}
                        thumb={itens.thumb}
                        title={itens.title}
                    />)
                }
            </div>

        </section>
    );
}
export default CreateNFT;
