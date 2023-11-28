import React from "react";
import styles from "@/app/ui/dashboard/users/addusers/addUsers.module.css";
import { addUser } from "@/app/lib/actions";

const AddUser = () => {
  return (
    <div className={styles.container}>
      <form action={addUser} className={styles.form}>
        <input type="text" placeholder="Username" name="username" />

        <input type="email" placeholder="Email" name="email" />
        <input type="password" placeholder="Password" name="password" />
        <input type="text" placeholder="Phone" name="phone" />
        <select name="isAdmin" id="isAdmin">
          <option value={false}>isAdmin</option>
          <option value={false}>No</option>
          <option value={true}>Yes</option>
        </select>
        <select name="isActive" id="isActive">
          <option value={true}>isActive</option>
          <option value={false}>No</option>
          <option value={true}>Yes</option>
        </select>
        <textarea
          name="address"
          id="address"
          rows="16"
          placeholder="Address"
        ></textarea>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddUser;
