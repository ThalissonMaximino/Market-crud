import { NextFunction, Request, Response  } from "express";
import { IProductRequest, IFoodProductRequest } from "./interfaces";
import market from "./database";




const notFound = 404;
const conflict = 409;


export const ensureProductExists = (
    req: Request,
    res: Response,
    next: NextFunction
  ): Response | void => {
    const id =  Number(req.params.productId);
    console.log (id)
    const findIndex = market.findIndex((product) => product.id === id);
    console.log(findIndex)
    if (findIndex === -1) {
      return res.status(notFound).json({
        error: "Product not found",
      });
    }
  
    res.locals.product = {
      idProduct: id,
      indexProduct: findIndex,
    };
  
    return next();
  };

  export const checkIfNameAlreadyExists = (
    request: Request,
    response: Response,
    next: NextFunction
  ): Response | void => {
    const productsData: Array<IProductRequest | IFoodProductRequest> =
      request.body;
  
    if (Array.isArray(productsData)) {
      let marketNames = false;
  
      productsData.forEach((newProduct) => {
        marketNames = market.some(
          (products) => products.name === newProduct.name
        );
      });
  
      if (marketNames) {
        return response.status(conflict).json({
          error: "Product already exists!",
        });
      }
    } else {
      let marketNames = false;
  
      marketNames = market.some(
        (products) => products.name === request.body.name
      );
  
      if (marketNames) {
        return response.status(conflict).json({
          error: "Product already exists!",
        });
      }
    }
  
    return next();
  };