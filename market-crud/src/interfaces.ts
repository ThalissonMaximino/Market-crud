interface Iproduct {
  id: number;
  name: string;
  price: number;
  weight: number;
  section: "food" | "cleaning";
  expirationDate: Date;
}

type IProductRequest = Omit<Iproduct, "id" | "expirationDate">;

interface ICleaningProduct extends Iproduct {}

interface IFoodProduct extends Iproduct {
  calories: number;
}
type IFoodProductRequest = Omit<IFoodProduct, "id" | "expirationDate">;

export {
  Iproduct,
  ICleaningProduct,
  IFoodProduct,
  IProductRequest,
  IFoodProductRequest,
};
