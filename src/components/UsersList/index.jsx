import styles from "./UsersList.module.css";

function UsersList() {
  const usersList = [
    {
      id: 1,
      firstName: "Олександр",
      lastName: "Ковальчук",
      age: 28,
      imgSrc: "/public/male.png",
    },
    {
      id: 2,
      firstName: "Марія",
      lastName: "Сидоренко",
      age: 34,
      imgSrc: "/public/female.png",
    },
    {
      id: 3,
      firstName: "Андрій",
      lastName: "Ткаченко",
      age: 22,
      imgSrc: "/public/male.png",
    },
    {
      id: 4,
      firstName: "Ірина",
      lastName: "Лисенко",
      age: 29,
      imgSrc: "/public/female.png",
    },
    {
      id: 5,
      firstName: "Віктор",
      lastName: "Гаврилюк",
      age: 31,
      imgSrc: "/public/male.png",
    },
    {
      id: 6,
      firstName: "Олена",
      lastName: "Мельник",
      age: 27,
      imgSrc: "/public/female.png",
    },
    {
      id: 7,
      firstName: "Дмитро",
      lastName: "Кравченко",
      age: 25,
      imgSrc: "/public/male.png",
    },
  ];

  const mapUsersList = (u) => (
    <li className={styles.usersItemList} key={u.id}>
      <img className={styles.userPhoto} src={u.imgSrc} />
      <div className={styles.usersWrap}>
        <a className={styles.usersLink} href={u.imgSrc}>
          {u.firstName} {u.lastName}
        </a>
        <p>{u.age} років</p>
      </div>
    </li>
  );

  return <ul className={styles.usersList}>{usersList.map(mapUsersList)}</ul>;
}

export default UsersList;
