import { useState } from "react";
import styles from "./UsersList.module.css";
import UserListItem from "./UserListItem";

const userList = [
  {
    id: 1,
    firstName: "Олександр",
    lastName: "Ковальчук",
    age: 28,
    imgSrc: "/public/male.png",
    isSelected: true,
  },
  {
    id: 2,
    firstName: "Марія",
    lastName: "Сидоренко",
    age: 34,
    imgSrc: "/public/female.png",
    isSelected: false,
  },
  {
    id: 3,
    firstName: "Андрій",
    lastName: "Ткаченко",
    age: 22,
    imgSrc: "/public/male.png",
    isSelected: false,
  },
  {
    id: 4,
    firstName: "Ірина",
    lastName: "Лисенко",
    age: 29,
    imgSrc: "/public/female.png",
    isSelected: false,
  },
  {
    id: 5,
    firstName: "Віктор",
    lastName: "Гаврилюк",
    age: 31,
    imgSrc: "/public/male.png",
    isSelected: false,
  },
  {
    id: 6,
    firstName: "Олена",
    lastName: "Мельник",
    age: 27,
    imgSrc: "/public/female.png",
    isSelected: false,
  },
  {
    id: 7,
    firstName: "Дмитро",
    lastName: "Кравченко",
    age: 25,
    imgSrc: "/public/male.png",
    isSelected: false,
  },
];

function UsersList() {
  const { usersList, setUsersList } = useState(userList);

  const mapUsersList = (u) => {
    return <UserListItem key={u.id} usersList={u} />;
  };

  return <ul className={styles.usersList}>{usersList.map(mapUsersList)}</ul>;
}

export default UsersList;
