import React from "react";

interface ButtonProp {
    text: string
    style_option: string
}
const Button = ({text, style_option}: ButtonProp) => {

    return(
        <button
        className={`text-zinc-100 rounded-lg py-2 px-5 text-lg font-hobibi font-bold hover:scale-105 active:scale-100 ${style_option}`}
        title={text}>
            {text}
        </button>
    );
}
export default Button;
