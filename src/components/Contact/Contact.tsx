import React from "react";
import Button from "../Button";


const Contact = () => {

    return (
        <section className="flex items-center justify-center flex-col text-zinc-100 w-full mt-10">

            <div
                className=" flex justify-center items-center flex-col gap-3">
                <h2 className="text-4xl font-block-han text-shadow xsmall:text-2xl">
                    Get in Touch
                </h2>
                <p 
                className="font-questrial text-center w-2/3 mb-10 small:w-3/4 xsmall:w-full xsmall:text-sm">
                    Set a secondary sales fee and add social links, a description, profile and banner images, and a description.
                </p>

                <input
                    type="email"
                    name=""
                    id=""
                    placeholder="Enter your email address"
                    className="w-3/4 bg-blue-light p-2 text-xl font-questrial outline-cyan-700 border-none rounded-lg xsmall:w-full xsmall:text-lg" />

                <Button
                    key={"btn-contact"}
                    style_option="btn-gradient-global text-zinc-300 tracking-wide mt-3"
                    text="Contact Us"
                />
            </div>

            <div className="w-3/4">
                <ul
                    className="flex justify-around items-center gap-3 w-full my-14 xsmall:flex-col small:flex-col xsmall:gap-7 small:gap-5">

                    <li className="flex justify-center items-center flex-col gap-1">
                        <div
                            className="mb-4 bg-blue-light w-24 h-24 rounded-full flex justify-center items-center">
                            <div
                                className="w-14 h-14 bg-blue-dark rounded-full"></div>
                        </div>

                        <a href="mailto:example@gmail.com" title="email de comunicação" target="_blank">example@gmail.com</a>
                        <a href="mailto:example@gmail.com" title="email de comunicação" target="_blank">example@gmail.com</a>
                    </li>

                    <li className="flex justify-center items-center flex-col gap-1">
                        <div
                            className="mb-4 bg-blue-light w-24 h-24 rounded-full flex justify-center items-center">
                            <div
                                className="w-14 h-14 bg-blue-dark rounded-full"></div>
                        </div>

                        <a href="https://telegram.org/" target="_blank">We are on Telegram</a>
                        <a href="https://telegram.org/@NicoCryptoChannel" target="_blank">@NicoCryptoChannel</a>
                    </li>

                    <li className="flex justify-center items-center flex-col gap-1">
                        <div
                            className="mb-4 bg-blue-light w-24 h-24 rounded-full flex justify-center items-center">
                            <div
                                className="w-14 h-14 bg-blue-dark rounded-full"></div>
                        </div>

                        <a href="tel:+1 800 123 456 789" title="Número de telefone" target="_blank">+1 800 123 456 789</a>
                        <a href="tel:+1 800 123 456 789" title="Número de telefone" target="_blank">+1 800 123 456 789</a>
                    </li>
                </ul>
            </div>

            <div className="flex gap-2 mb-10">
                <img src="https://a.imagem.app/o4GI2P.png" alt="Rede social Facebook" title="rede social Facebook" className="w-12 h-12 xsmall:w-9 xsmall:h-9" />
                <img src="https://a.imagem.app/o4GQ5l.png" alt="Rede social instagram " title="rede social instagram" className="w-12 h-12 xsmall:w-9 xsmall:h-9" />
                <img src="https://a.imagem.app/o4GRVS.png" alt="Rede social twiter" title="rede social twiter" className="w-12 h-12 xsmall:w-9 xsmall:h-9" />
                <img src="https://a.imagem.app/o4GdGv.png" alt="Rede social youtube" title="rede social youtube" className="w-12 h-12 xsmall:w-9 xsmall:h-9" />
            </div>
        </section>
    );
}

export default Contact;