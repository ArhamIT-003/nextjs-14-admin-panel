import React from "react";
import styles from "@/app/ui/dashboard/products/addproducts/addProducts.module.css";
import { addProduct } from "@/app/lib/actions";

const AddProducts = () => {
  return (
    <div className={styles.container}>
      <form action={addProduct} className={styles.form}>
        <input type="text" placeholder="Title" name="title" />
        <select name="cat" id="cat">
          <option value="general">Choose by category</option>
          <option value="kitchen">Kitchen</option>
          <option value="iphone">Iphone</option>
          <option value="computer">Computer</option>
        </select>
        <input type="number" placeholder="Price" name="price" />
        <input type="number" placeholder="Stock" name="stock" />
        <input type="text" placeholder="Color" name="color" />
        <input type="text" placeholder="size" name="size" />
        <textarea
          name="desc"
          id="desc"
          rows="16"
          placeholder="Description"
        ></textarea>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddProducts;
