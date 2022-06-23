import { NotFoundError } from "navi";

const db = {
  hat: {
    emoji: "🧢",
    title: "Cap",
    price: "$58.34",
  },
  flamethrower: {
    emoji: "🔥🔫",
    title: "Not a flameDispenser",
    price: "$599.12",
  },
};

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default {
  fetchProduct: async (id) => {
    await delay(100);
    let product = await db[id];
    if (!product) {
      throw new NotFoundError();
    }
    return product;
  },
  fetchProducts: async () => {
    await delay(100);
    return db;
  },
};
