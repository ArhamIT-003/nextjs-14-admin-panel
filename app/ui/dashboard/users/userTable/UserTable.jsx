import React from "react";
import styles from "./usertable.module.css";
import Image from "next/image";
import Link from "next/link";
import { deleteUser } from "@/app/lib/actions";

const UserTable = async ({ users }) => {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <td>Name</td>
          <td>Email</td>
          <td>Created At</td>
          <td>Role</td>
          <td>Status</td>
          <td>Action</td>
        </tr>
      </thead>
      <tbody>
        {users.map((user, index) => (
          <tr key={index}>
            <td>
              <div className={styles.name}>
                <Image
                  src={user.img || "/noavatar.png"}
                  alt=""
                  width={40}
                  height={40}
                  className={styles.userImg}
                />
                {user.username}
              </div>
            </td>
            <td>{user.email}</td>
            <td>{user.createdAt.toString().slice(3, 15)}</td>
            <td>{user.isAdmin ? "Admin" : "Client"}</td>
            <td>{user.isActive ? "Active" : "Passive"}</td>
            <td>
              <div className={styles.btn}>
                <Link href={`/dashboard/users/${user.id}`}>
                  <button className={styles.view}>View</button>
                </Link>
                <form action={deleteUser}>
                  <input type="hidden" value={user.id} name="id" />
                  <button className={styles.delete}>Delete</button>
                </form>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;
