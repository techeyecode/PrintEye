// import {
//   collection,
//   doc,
//   getDoc,
//   getDocs,
//   limit,
//   orderBy,
//   query,
//   QueryConstraint,
//   setDoc,
//   where,
//   writeBatch,
// } from "firebase/firestore";
// import { auth, db } from "./firebase";

// export interface QueryCondition {
//   field: string;
//   operator:
//     | "=="
//     | "!="
//     | "<"
//     | "<="
//     | ">"
//     | ">="
//     | "array-contains"
//     | "in"
//     | "not-in"
//     | "array-contains-any";
//   value: string | number | boolean | string[] | number[] | boolean[];
// }

// interface GetOptions {
//   id?: string;
//   queries?: QueryCondition[];
//   sortBy?: string;
//   sortDirection?: "asc" | "desc";
//   limitation?: number;
//   search?: string;
//   searchField?: string;
// }

// interface DocumentData {
//   [key: string]: unknown;
// }

// const service = {
//   search: async (
//     search: string,
//     searchField: string,
//     docsData: (DocumentData & { id: string })[]
//   ): Promise<(DocumentData & { id: string })[]> => {
//     if (!search || !searchField) return docsData;

//     const searchLower = search.toLowerCase();
//     return docsData.filter((doc) => {
//       let fieldValue = "";
//       if (searchField.includes(".")) {
//         const subSearchField = searchField.split(".");

//         if (subSearchField.length === 3) {
//           fieldValue = (doc[subSearchField[0]] as DocumentData)[
//             subSearchField[1]
//           ][subSearchField[2]] as string;
//         } else {
//           fieldValue = (doc[subSearchField[0]] as DocumentData)[
//             subSearchField[1]
//           ] as string;
//         }
//       } else {
//         fieldValue = doc[searchField] as string;
//       }
//       return (
//         typeof fieldValue === "string" &&
//         fieldValue.toLowerCase().includes(searchLower)
//       );
//     });
//   },

//   get: async (collectionName: string, options: GetOptions = {}) => {
//     const {
//       id,
//       queries,
//       sortBy,
//       sortDirection = "desc",
//       limitation,
//       search,
//       searchField,
//     } = options;

//     if (id) {
//       const docRef = doc(db, collectionName, id);
//       const docSnap = await getDoc(docRef);

//       if (!docSnap.exists()) {
//         throw new Error("No such document!");
//       }

//       return docSnap.data();
//     }

//     const collectionRef = collection(db, collectionName);
//     const queryConstraints: QueryConstraint[] = [];

//     if (queries && queries.length > 0) {
//       queries.forEach((q) => {
//         queryConstraints.push(where(q.field, q.operator, q.value));
//       });
//     }

//     if (sortBy) {
//       queryConstraints.push(orderBy(sortBy, sortDirection));
//     }

//     if (limitation) {
//       queryConstraints.push(limit(limitation));
//     }

//     const finalQuery = query(collectionRef, ...queryConstraints);
//     const querySnapshot = await getDocs(finalQuery);

//     let docsData = querySnapshot.docs.map((doc) => ({
//       id: doc.id,
//       ...doc.data(),
//     }));

//     // Use the search service if search parameters are provided
//     if (search && searchField) {
//       docsData = await service.search(search, searchField, docsData);
//     }

//     return docsData;
//   },

//   post: async (
//     collectionName: string,
//     formData: DocumentData,
//     id?: string
//   ): Promise<void> => {
//     const docRef = id
//       ? doc(db, collectionName, id)
//       : doc(collection(db, collectionName));

//     const docSnapshot = await getDoc(docRef);

//     if (id && docSnapshot.exists()) {
//       throw new Error(`Duplicate ID: ${id} Found!`);
//     }

//     await setDoc(docRef, {
//       ...formData,
//       createdAt: new Date().toISOString(),
//       updatedAt: new Date().toISOString(),
//       createdBy: auth.currentUser?.email || "",
//       updatedBy: auth.currentUser?.email || "",
//     });
//   },

//   put: async <T>(
//     collectionName: string,
//     formData: T,
//     id: string
//   ): Promise<void> => {
//     const collectionRef = doc(collection(db, collectionName), id);
//     await setDoc(collectionRef, {
//       ...formData,
//       updatedAt: new Date().toISOString(),
//       updatedBy: auth.currentUser?.email || "",
//     });
//   },

//   delete: async (
//     collectionName: string,
//     ids: string | string[]
//   ): Promise<void> => {
//     const batch = writeBatch(db);

//     if (Array.isArray(ids)) {
//       ids.forEach((id) => {
//         const docRef = doc(db, collectionName, id);
//         batch.delete(docRef);
//       });
//     } else {
//       const docRef = doc(db, collectionName, ids);
//       batch.delete(docRef);
//     }

//     await batch.commit();
//   },

//   checkEmailExists: async (
//     collectionName: string,
//     email: string
//   ): Promise<boolean> => {
//     const docRef = doc(db, collectionName, email.toLowerCase());
//     const docSnapshot = await getDoc(docRef);
//     return docSnapshot.exists();
//   },

//   checkIdExists: async (
//     collectionName: string,
//     id: string
//   ): Promise<boolean> => {
//     const docRef = doc(db, collectionName, id);
//     const docSnapshot = await getDoc(docRef);
//     return docSnapshot.exists();
//   },

//   checkNumberOfDocuments: async (collectionName: string): Promise<number> => {
//     const collectionRef = collection(db, collectionName);
//     const querySnapshot = await getDocs(collectionRef);
//     return querySnapshot.size;
//   },
// };

// export default service;
