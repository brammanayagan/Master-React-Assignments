// import { useContext } from "react";
// import { AppContext } from "../context/AppContext";

// const RolePage = () => {
//   const { role, setRole } = useContext(AppContext);

//   const handleToggleRole = () => {
//     setRole(role === "admin" ? "user" : "admin");
//   };

//   return (
//     <>
//       <div className="p-4">
//         <h2>Role: {role}</h2>

//         <button
//           onClick={handleToggleRole}
//           className="bg-red-500 text-white px-4 py-2 mt-2"
//         >
//           Switch Role
//         </button>

//         <div className="mt-4 text-xl">
//           {role === "admin" ? "Dashboard" : "Profile"}
//         </div>
//       </div>
//     </>
//   );
// };

// export default RolePage;
