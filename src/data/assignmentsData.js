import UserListTask from "../assignments/react/props/UserListTask";
import ProductCardTask from "../assignments/react/props/ProductCardTask";
import StudentMarksTask from "../assignments/react/conditional/StudentMarksTask";
import SkillsListTask from "../assignments/react/lists/SkillsListTask";
import EmployeeProfileTask from "../assignments/react/components/EmployeeProfileTask";

export const assignmentsData = {
  react: {
    props: [
      {
        id: "user-list-task",
        title: "User List Task",
        component: UserListTask,
      },
      {
        id: "product-card-task",
        title: "Product Card Task",
        component: ProductCardTask,
      },
    ],

    conditional: [
      {
        id: "student-marks-task",
        title: "Student Marks Task",
        component: StudentMarksTask,
      },
    ],

    lists: [
      {
        id: "skills-list-task",
        title: "Skills List Task",
        component: SkillsListTask,
      },
    ],

    components: [
      {
        id: "employee-profile-task",
        title: "Employee Profile Task",
        component: EmployeeProfileTask,
      },
    ],
  },
};
