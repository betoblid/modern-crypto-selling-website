import React from "react";
import { Link } from "react-router-dom"
const Erro = () => {

    return(
        <main>
            <section>
                <h2>Essa pagina não existe ou URL inexistente</h2>
                <p>por favor volte a pagina inicial.</p>
                <Link to="/" title="Link para voltar para pagina inicial">Voltar</Link>
            </section>
        </main>
    );
}
export default Erro;
