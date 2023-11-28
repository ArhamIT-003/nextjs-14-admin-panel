import React from "react";
import styles from "@/app/ui/dashboard/users/singleuser/singleuser.module.css";
import Image from "next/image";
import { fetchUsers } from "@/app/lib/data";

const SingleUserPage = async ({ params }) => {
  const { id } = params;

  const user = await fetchUsers(id);

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image
            src={user.img || "/noavatar.png"}
            alt=""
            width={300}
            height={300}
            className={styles.img}
          />
        </div>
      </div>
      <div className={styles.formContainer}>
        <form className={styles.form}>
          <input
            type="text"
            placeholder={user.username || "Username"}
            name="username"
          />

          <input
            type="email"
            placeholder={user.email || "Email"}
            name="email"
          />
          <input
            type="password"
            placeholder={user.password || "Password"}
            name="password"
          />
          <input type="text" placeholder="Phone" name="phone" />
          <select name="isAdmin" id="isAdmin">
            <option value={false}>isAdmin</option>
            <option value={false} selected={!user.isAdmin}>
              No
            </option>
            <option value={true} selected={user.isAdmin}>
              Yes
            </option>
          </select>
          <select name="isActive" id="isActive">
            <option value={true}>isActive</option>
            <option value={false} selected={!user.isActive}>
              No
            </option>
            <option value={true} selected={user.isActive}>
              Yes
            </option>
          </select>
          <textarea
            name="address"
            id="address"
            rows="16"
            placeholder={user.address || "Address"}
          ></textarea>
          <button type="submit">Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleUserPage;
