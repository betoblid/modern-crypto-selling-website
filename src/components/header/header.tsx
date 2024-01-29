import React, { useState } from "react";
import Button from "../Button";
import { IoMenu } from "react-icons/io5";
/**
 * 1 - fazer a importação da logo que esta no arquivo assets
 * 2 - desaclopar o hook do header
 */

const Header = () => {

    const [menubar, setMenuBar] = useState<boolean>(false)

    return (
        <header className="flex w-full justify-around px-3 items-center flex-row py-5 xsmall:relative max-w-[1440px] mx-auto">

            <img src="https://a.imagem.app/oVOoji.png" alt="oVOoji.png" title="logo de nossa page" className="w-20 h-30" />

            <nav
                className={`xsmall:absolute xsmall:top-16 mx-auto xsmall:bg-zinc-900 xsmall:w-11/12 xsmall:rounded-lg ${menubar ? "" : "xsmall:hidden small:hidden"} small:absolute small:top-16 small:bg-zinc-900 small:w-11/12 small:rounded-lg`}>
                <ul
                    className="flex space-x-5 font-hobibi text-base text-white-pasit
                xsmall:block small:block">
                    <li>
                        <a
                            href="#"
                            className="text-zinc-100 xsmall:block small:block text-center py-2">
                            Home
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className=" hover:text-zinc-100 xsmall:block small:block text-center py-2">
                            All NFTs</a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="hover:text-zinc-100 xsmall:block small:block text-center py-2">
                            Team</a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className=" hover:text-zinc-100 xsmall:block small:block text-center py-2">
                            Terms & Co.</a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className=" hover:text-zinc-100 xsmall:block small:block text-center py-2">
                            Contact</a>
                    </li>
                </ul>
            </nav>

            {/* um bottão de menu que aparecerá em telas de celulares */}
            <div className="xl:hidden 2xl:hidden lg:hidden md:hidden">
                <button
                    className="text-zinc-100 text-4xl"
                    onClick={() => setMenuBar(!menubar)}>
                    <IoMenu />
                </button>
                
            </div>
            <Button
                text="Get in Touch"
                style_option="border-2 border-pink-light border-r-purple-light shadow-4xl bg-white-pasit hover:shadow-5xl xsmall:hidden small:hidden" />
        </header>
    );
}
export default Header;
