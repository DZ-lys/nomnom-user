export type Category = {
  _id: string;
  categoryName: string;
};

export type Details = {
  _id: string;
  foodName: string;
  price: number;
  image: string;
  ingredients: string;
  category: string;
};
