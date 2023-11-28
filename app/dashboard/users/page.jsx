import React from "react";
import styles from "@/app/ui/dashboard/users/user.module.css";
import UserTable from "@/app/ui/dashboard/users/userTable/UserTable";
import Search from "@/app/ui/dashboard/search/Search";
import Link from "next/link";
import Pagination from "@/app/ui/dashboard/pagination/Pagination";
import { fetchUser } from "@/app/lib/data";

const Users = async ({ searchParams }) => {
  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;

  const { users, count } = await fetchUser(q, page);

  return (
    <div className={styles.container}>
      <div className={styles.topBar}>
        <Search placeholder="Search here for ..." />
        <Link href="/dashboard/users/add">
          <button className={styles.btn}>Add New</button>
        </Link>
      </div>
      <div className={styles.mainContent}>
        <UserTable users={users} />
      </div>
      <div className={styles.bottomBar}>
        <Pagination count={count} page={page} />
      </div>
    </div>
  );
};

export default Users;
