import classNames from "classnames";
import styles from "./UsersList.module.css";

function UserListItem({ userList: u }) {
  const linkClassName = classNames(styles.usersLink, {
    [styles.selectedUsersLink]: u.isSelected,
  });

  return (
    <li className={linkClassName} key={u.id}>
      <a className={styles.usersLink} href={u.imgSrc}>
        <img className={styles.userPhoto} src={u.imgSrc} />
        {u.firstName} {u.lastName}
        <p className={styles.usersAge}>{u.age} років</p>
      </a>
    </li>
  );
}

export default UserListItem;
