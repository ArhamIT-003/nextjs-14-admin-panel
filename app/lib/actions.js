import { Product, User } from "./Models";
import bcrypt from "bcrypt";
import { connectToDB } from "./utils";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { signIn } from "../auth";

const saltRounds = 4;

export const addUser = async (formData) => {
  "use server";

  const { username, email, password, phone, isActive, isAdmin, address } =
    Object.fromEntries(formData);

  try {
    connectToDB();
    const newUser = new User({
      username,
      email,
      password: await bcrypt.hash(password, saltRounds),
      phone,
      isActive,
      isAdmin,
      address,
    });

    await newUser.save();
  } catch (error) {
    throw new Error("failed to create user!");
  }

  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
};

export const deleteUser = async (formData) => {
  "use server";

  const { id } = Object.fromEntries(formData);

  try {
    await User.findByIdAndDelete(id);
  } catch (error) {
    throw new Error("Failed in deleting the users.");
  }

  revalidatePath("/dashboard/users");
};

export const updateUser = async (formData) => {
  "use server";

  const { id, username, email, password, phone, isActive, isAdmin, address } =
    Object.fromEntries(formData);

  try {
    const updateFields = {
      username,
      email,
      password,
      phone,
      isActive,
      isAdmin,
      address,
    };

    Object.keys(updateFields).forEach(
      (key) =>
        (updateFields[key] === "" || undefined) && delete updateFields[key]
    );

    await User.findByIdAndUpdate(id, updateFields);
  } catch (error) {
    throw new Error("Failed to update the user");
  }

  redirect("/dashboard/users");
};

export const addProduct = async (productData) => {
  "use server";

  const { title, desc, cat, price, stock, color, size } =
    Object.fromEntries(productData);

  try {
    connectToDB();
    const newProduct = new Product({
      title,
      description: desc,
      cat,
      price,
      stock,
      color,
      size,
    });
    await newProduct.save();
  } catch (error) {
    throw new Error("failed to create products");
  }

  revalidatePath("/dashboard/products");
  redirect("/dashboard/products");
};

export const deleteProduct = async (formData) => {
  "use server";

  const { id } = Object.fromEntries(formData);

  try {
    await Product.findByIdAndDelete(id);
  } catch (error) {
    throw new Error("Failed in deleting the products.");
  }

  revalidatePath("/dashboard/users");
};

export const updateProduct = async (formData) => {
  "use server";

  const { id, title, description, cat, price, stock, color, size } =
    Object.fromEntries(formData);

  try {
    await connectToDB();
    const updateFields = {
      title,
      description,
      cat,
      price,
      stock,
      color,
      size,
    };

    Object.keys(updateFields).forEach(
      (key) =>
        (updateFields[key] === "" || undefined) && delete updateFields[key]
    );

    await Product.findByIdAndUpdate(id, updateFields);
  } catch (error) {
    throw new Error("Failed to update the product");
  }
  redirect("/dashboard/products");
};

export const authentication = async (formData) => {
  "use server";

  const { username, password } = Object.fromEntries(formData);

  connectToDB();
  await signIn("credentials", { username, password });
};
