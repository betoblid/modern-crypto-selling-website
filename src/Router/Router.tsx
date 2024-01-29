import { BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "../Page/Home";
import Erro from "../Page/Error/error";

const Router = () => {

    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="*" element={<Erro />} />
            </Routes>
        </BrowserRouter>
    );
}
export default Router;
