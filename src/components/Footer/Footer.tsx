import React from "react";

const Footer = () => {

    return (
        <footer className="max-w-xmax">

            <div className="w-11/12 bg-zinc-600 h-px mx-auto"></div>

            <div className="flex flex-row justify-around my-7 xsmall:flex-col-reverse xsmall:items-center xsmall:justify-center small:flex-col-reverse small:items-center small:justify-center">

                <p
                    className="font-questrial text-sm text-zinc-100 xsmall:text-xs small:text-xs">

                    Copyright &copy; 2022 Nazmul Shanto. All Rights Reserved
                </p>

                <nav>
                    <ul className="flex space-x-5 font-hobibi text-base text-white-pasit xsmall:flex-col small:flex-col xsmall:text-center small:text-center xsmall:mb-2 small:mb-2">
                        <li className="small:py-2 small:block xsmall:py-2">
                            <a
                                href=""
                                className="text-zinc-100 xsmall:font-bold small:font-bold">
                                Home
                            </a>
                        </li>
                        <li className="small:py-2 small:block xsmall:py-2">
                            <a
                                href=""
                                className=" hover:text-zinc-100 xsmall:font-bold small:font-bold">
                                All NFTs
                            </a>
                        </li>
                        <li className="small:py-2 small:block xsmall:py-2">
                            <a
                                href=""
                                className="hover:text-zinc-100 xsmall:font-bold small:font-bold">
                                Team
                            </a>
                        </li>
                        <li className="small:py-2 small:block xsmall:py-2">
                            <a
                                href=""
                                className=" hover:text-zinc-100 xsmall:font-bold small:font-bold">
                                Terms & Co.
                            </a>
                        </li>
                        <li className="small:py-2 small:block xsmall:py-2">
                            <a
                                href=""
                                className=" hover:text-zinc-100 xsmall:font-bold small:font-bold">
                                Contact
                            </a>
                        </li>
                    </ul>
                </nav>

            </div>
        </footer>
    );
}
export default Footer;
