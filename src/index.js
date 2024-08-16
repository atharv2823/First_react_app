import { createRoot } from "react-dom/client";
import  App ,{ Greet1 ,Greet2} from "./App"

const root = createRoot(document.getElementById("root"))


root.render (<>
    <App/>,
    <Greet1/>,
    <Greet2/>
    </>
)