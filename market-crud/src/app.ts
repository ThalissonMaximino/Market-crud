import express,{Application, Request, Response} from "express"
import market from "./database";
import logics from "./logics";
import { checkIfNameAlreadyExists, ensureProductExists } from "./middlewares";

const app: Application = express();
app.use(express.json());



app.post("/products",checkIfNameAlreadyExists, logics.createProduct );
app.get("/products", logics.listAllProducts);
app.get("/products/:productId", ensureProductExists, logics.getProduct);
app.patch("/products/:productId",ensureProductExists, checkIfNameAlreadyExists, logics.updateProducts );
app.delete("/products/:productId", ensureProductExists, logics.deleteProduct);


app.listen(3000, () => console.log("Server is running."));