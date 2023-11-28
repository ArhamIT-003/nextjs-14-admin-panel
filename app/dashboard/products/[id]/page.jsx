import React from "react";
import styles from "@/app/ui/dashboard/products/singleproduct/singleproduct.module.css";
import Image from "next/image";
import { fetchProduct } from "@/app/lib/data";
import { updateProduct } from "@/app/lib/actions";

const SingleProductPage = async ({ params }) => {
  const { id } = params;

  const product = await fetchProduct(id);
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image
            src={product.img || "/noproduct.jpg"}
            alt=""
            width={300}
            height={300}
            className={styles.img}
          />
        </div>
        {product.title}
      </div>
      <div className={styles.formContainer}>
        <form className={styles.form} action={updateProduct}>
          <input type="hidden" value={product.id} name="id" />
          <input
            type="text"
            placeholder={product.title || "Title"}
            name="title"
          />
          <select name="cat" id="cat">
            <option value="general">Choose by category</option>
            <option value="kitchen">Kitchen</option>
            <option value="iphone">Iphone</option>
            <option value="computer">Computer</option>
          </select>
          <input
            type="number"
            placeholder={product.price || "Price"}
            name="price"
          />
          <input
            type="number"
            placeholder={product.stock || "Stock"}
            name="stock"
          />
          <input
            type="text"
            placeholder={product.color || "Color"}
            name="color"
          />
          <input type="text" placeholder={product.size || "Size"} name="size" />
          <textarea
            name="description"
            id="desc"
            rows="16"
            placeholder={product.description}
          ></textarea>
          <button type="submit">Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleProductPage;
