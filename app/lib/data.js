import { User, Product } from "./Models";
import { connectToDB } from "./utils";

export const fetchUser = async (query, page) => {
  const regex = new RegExp(query, "i");

  const ITEMS_PER_PAGE = 2;

  try {
    await connectToDB();
    const count = await User.find({ username: { $regex: regex } }).count();
    const users = await User.find({ username: { $regex: regex } })
      .limit(ITEMS_PER_PAGE)
      .skip(ITEMS_PER_PAGE * (page - 1));

    return { count, users };
  } catch (error) {
    console.error("Error fetching users:", error);
    throw new Error("Failed to fetch users.");
  }
};

export const fetchUsers = async (id) => {
  try {
    await connectToDB();
    const user = await User.findById(id);
    return user;
  } catch (error) {
    throw new Error("Failed to fetch single user");
  }
};

export const fetchProducts = async (query, page) => {
  const regex = new RegExp(query, "i");

  const ITEMS_PER_PAGE = 2;

  try {
    await connectToDB();
    const count = await Product.find({ title: { $regex: regex } }).count();
    const products = await Product.find({ title: { $regex: regex } })
      .limit(ITEMS_PER_PAGE)
      .skip(ITEMS_PER_PAGE * (page - 1));

    return { count, products };
  } catch (error) {
    console.error("Error fetching products:", error);
    throw new Error("Failed to fetch products.");
  }
};

export const fetchProduct = async (id) => {
  try {
    await connectToDB();
    const product = await Product.findById(id);
    return product;
  } catch (error) {
    throw new Error("Failed to fetch single product");
  }
};
