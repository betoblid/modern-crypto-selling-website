import React, { ReactNode } from "react";
import Button from "../Button";
import Card from "../Card";
import bd from "../../database/db.json"


const ListCard = () => {

    return (
        <section>
            <div className="flex justify-center items-center flex-col gap-3">
                <h2
                    className="text-3xl text-cyan-500 font-questrial text-center xsmall:text-2xl">
                    Most Popular <span className="font-block-han text-zinc-100 ">NFTs</span>
                </h2>
                <nav
                    className="flex space-x-5 text-zinc-400 text-center text-2xl mb-10 small:text-xl xsmall:text-sm">

                    <a href="" className="hover:text-zinc-100 font-questrial">
                        All
                    </a>
                    <a href="" className="hover:text-zinc-100 font-questrial">
                        Hape prime
                    </a>
                    <a href="" className="hover:text-zinc-100 font-questrial">
                        Lazy Lions
                    </a>
                    <a href="" className="hover:text-zinc-100 font-questrial">
                        Peaceful ape
                    </a>
                </nav>
            </div>
            <div 
            className="flex justify-center items-center">
                <div
                    className="flex flex-row flex-wrap justify-center items-center w-[890px] gap-3 xl:w-[990px]" >
                    {
                       bd.NFTS.map((itens) => <Card
                       key={itens.id}
                       classe={itens.classe}
                       price={itens.price}
                       thumb={itens.thub_url}
                       title={itens.title}
                       id={itens.id}
                   />)
                    }
                </div>
            </div>

            <div className="flex items-center justify-center mt-20">
                <Button
                    text="Explore All NFTs"
                    style_option="border-2 border-pink-light border-r-purple-light shadow-4xl bg-white-pasit hover:shadow-5xl "
                    key={"btn04"} />
            </div>
        </section>
    );
}

export default ListCard;