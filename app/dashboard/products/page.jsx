import React from "react";
import styles from "@/app/ui/dashboard/products/products.module.css";
import Link from "next/link";
import Search from "@/app/ui/dashboard/search/Search";
import ProductTable from "@/app/ui/dashboard/products/ProductTable/productTable";
import Pagination from "@/app/ui/dashboard/pagination/Pagination";
import { fetchProducts } from "@/app/lib/data";

const Products = async ({ searchParams }) => {
  const page = searchParams?.page || 1;
  const q = searchParams?.q || "";

  const { count, products } = await fetchProducts(q, page);
  return (
    <div className={styles.container}>
      <div className={styles.topBar}>
        <Search placeholder="Search here for ..." />
        <Link href="/dashboard/products/add">
          <button className={styles.btn}>Add New</button>
        </Link>
      </div>
      <div className={styles.mainContent}>
        <ProductTable products={products} />
      </div>
      <div className={styles.bottomBar}>
        <Pagination count={count} />
      </div>
    </div>
  );
};

export default Products;
