import type { User } from "../types/User";
import styles from "./ProjectItem.module.css";

interface ProjectItemProps {
  user: User;
  handleClickUser: (id: number) => void;
  children?: React.ReactNode;
}

const ProjectItem: React.FC<ProjectItemProps> = ({
  user,
  handleClickUser,
  children,
}) => {
  return (
    <>
      <li
        className={user.active ? styles.isActive : ""}
        onClick={() => handleClickUser(user.id)}
      >
        <p>
          {user.name} - {user.age > 18 ? "Il est majeur" : "Il est mineur"}
        </p>
        {/* qsdqsd */}
      </li>
      {children}
    </>
  );
};

export default ProjectItem;
