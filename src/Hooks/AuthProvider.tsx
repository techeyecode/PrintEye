// import { onAuthStateChanged, User } from "firebase/auth";
// import React, { useContext } from "react";
// import { auth } from "../Services/firebase";
// import { UserData } from "../Types/type";
// import service from "../Services/services";

// interface CustomUser extends User {
//   customClaims?: {
//     admin?: boolean;
//     userType?: "guest" | "user" | "admin";
//   };
// }

// export interface AuthContextType {
//   currentUser: CustomUser | null;
//   userLoggedIn: boolean;
//   loading: boolean;
//   userType: "guest" | "user" | "admin";
//   setUserType: (userType: "guest" | "user" | "admin") => void;
//   forceRefresh: () => Promise<void>;
//   userData: UserData | null;
//   refreshUserData: () => Promise<UserData | null>;
// }

// const AuthContext = React.createContext<AuthContextType | null>(null);

// export const useAuth = () => {
//   const context = useContext(AuthContext);
//   if (!context) {
//     throw new Error("useAuth must be used within an AuthProvider");
//   }
//   return context;
// };

// export default function AuthProvider({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   const [currentUser, setCurrentUser] = React.useState<CustomUser | null>(null);
//   const [userData, setUserData] = React.useState<UserData | null>(null);
//   const [loading, setLoading] = React.useState(true);
//   const userLoggedIn = Boolean(currentUser);
//   const [userType, setUserType] = React.useState<"guest" | "admin">("guest");

//   React.useEffect(() => {
//     const unSubscribe = onAuthStateChanged(auth, async (user) => {
//       setCurrentUser(user as CustomUser);
//       if (user) {
//         const idTokenResult = await user.getIdTokenResult(true);
//         setUserType(idTokenResult.claims.userType as "user" | "admin");
//       } else {
//         setUserType("guest");
//       }
//       setLoading(false);
//     });

//     return () => unSubscribe();
//   }, []);

//   const fetchUserData = async (): Promise<UserData | null> => {
//     if (userLoggedIn && currentUser?.email) {
//       if (userType === "user") {
//         try {
//           const res = await service.get<UserData>("Users", {
//             id: currentUser.email,
//           });

//           const userDataResult = res ? { ...res, id: currentUser.email } : null;
//           setUserData(userDataResult);
//           return userDataResult;
//         } catch (err) {
//           console.error("Error fetching user data:", err);
//           if (
//             err instanceof Error &&
//             err.message.includes("No such document")
//           ) {
//             setTimeout(() => {
//               fetchUserData();
//             }, 2000);
//           } else {
//             console.error("Unexpected error fetching user data:", err);
//             setUserData(null);
//           }
//           return null;
//         }
//       } else {
//         setUserData(null);
//         return null;
//       }
//     } else {
//       setUserData(null);
//       return null;
//     }
//   };

//   React.useEffect(() => {
//     fetchUserData();
//   }, [currentUser, userType, userLoggedIn]);

//   const forceRefresh = async () => {
//     if (auth.currentUser) {
//       await auth.currentUser.getIdToken(true);
//       const user = auth.currentUser as CustomUser;
//       setCurrentUser({ ...user });
//       const idTokenResult = await user.getIdTokenResult();
//       setUserType(idTokenResult.claims.userType as "guest" | "user" | "admin");
//     }
//   };

//   return (
//     <AuthContext.Provider
//       value={{
//         currentUser,
//         userLoggedIn,
//         loading,
//         userType,
//         setUserType,
//         forceRefresh,
//         userData,
//         refreshUserData: fetchUserData,
//       }}
//     >
//       {!loading && children}
//     </AuthContext.Provider>
//   );
// }
