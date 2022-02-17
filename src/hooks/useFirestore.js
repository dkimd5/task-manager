import { useEffect, useState } from "react";
import { projectFirestore } from "../firebase/config";
import { collection, query, onSnapshot } from "firebase/firestore";

const useFirestore = (collectionName) => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const collectionRef = collection(projectFirestore, collectionName);

    const collectionQuery = query(collectionRef);

    const unsub = onSnapshot(collectionQuery, (snap) => {
      let documents = [];
      snap.forEach((doc) => {
        documents.push({ ...doc.data(), id: doc.id });
      });
      setCards(documents);
    });

    return () => unsub();
  }, [collectionName]);

  return { cards };
};

export default useFirestore;
