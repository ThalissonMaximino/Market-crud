import { Request, Response, response } from "express";
import market from "./database";
import {
  Iproduct,
  IProductRequest,
  IFoodProductRequest,
  ICleaningProduct,
  IFoodProduct,
} from "./interfaces";

const createProduct = (req: Request, res: Response): Response => {

  const payload: Array<IProductRequest | IFoodProductRequest> = req.body;
  

  const date = new Date();
  date.setDate(date.getDate() + 365);

  const newProduct = payload.map(
    (product: IProductRequest | IFoodProductRequest) => {
      const productCreated: ICleaningProduct | IFoodProduct = {
        id: market.length + 1,
        ...product,
        expirationDate: date,
      };
      market.push(productCreated);

      return productCreated;
    }
  );
  const totalValue = market.reduce(
    (previusValue, currentValue) => previusValue + currentValue.price,
    0
  );
  return res
    .status(201)
    .json({ total: totalValue, marketProducts: newProduct });
};

const listAllProducts = (req: Request, res: Response): Response => {
  return res.json(market);
};

const getProduct = (req: Request, res: Response): Response => {
  const index = res.locals.product.indexProduct;

  return res.json(market[index]);
};

const deleteProduct = (req: Request, res: Response): Response => {
  const index = res.locals.product.indexProduct;

  market.splice(index, 1);

  return res.status(204).send();
};

export const updateProducts = (
  request: Request,
  response: Response
): Response => {
  const index = response.locals.product.indexProduct;
  const updatedData = request.body;

  market[index] = {
    ...market[index],
    ...updatedData,
  };

  return response.json(market[index]);
};


export default { createProduct, listAllProducts, getProduct, deleteProduct, updateProducts};
