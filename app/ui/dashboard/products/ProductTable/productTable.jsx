import React from "react";
import styles from "./product.module.css";
import Image from "next/image";
import Link from "next/link";
import { deleteProduct } from "@/app/lib/actions";

const ProductTable = ({ products }) => {
  return (
    <div className={styles.container}>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Title</td>
            <td>Description</td>
            <td>Price</td>
            <td>Created At</td>
            <td>Stock</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index}>
              <td>
                <div className={styles.title}>
                  <Image
                    src={product.img || "/noproduct.jpg"}
                    alt=""
                    width={40}
                    height={40}
                    className={styles.productImg}
                  />
                  {product.title}
                </div>
              </td>
              <td>{product.description}</td>
              <td>${product.price}</td>
              <td>{product.createdAt.toString().slice(3, 15)}</td>
              <td>{product.stock}</td>
              <td>
                <div className={styles.btn}>
                  <Link href={`/dashboard/products/${product.id}`}>
                    <button className={styles.view}>View</button>
                  </Link>
                  <form action={deleteProduct}>
                    <input type="hidden" value={product.id} name="id" />
                    <button className={styles.delete}>Delete</button>
                  </form>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
