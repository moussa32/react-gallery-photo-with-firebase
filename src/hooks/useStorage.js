import { useState, useEffect } from "react";
import { projectStorage, projectFireStore, timestamp } from "../firebase/config";

const useStorage = (file) => {

  const [progress, setProgress] = useState(0);
  const [url, setUrl] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    //References
    const storageRef = projectStorage.ref(file.name);
    const collectionRef = projectFireStore.collection('images');

    storageRef.put(file).on('state_changed', (snap) => {
      let precentage = (snap.bytesTransferred / snap.totalBytes) * 100;
      setProgress(precentage);
    }, (err) => {
      setError(err);
    }, async () => {
      const url = await storageRef.getDownloadURL();
      const createdAt = timestamp();

      collectionRef.add({
        url: url,
        createdAt: createdAt
      });

      setUrl(url);
    })

  }, [file]);

  return { progress, url, error }
}

export default useStorage;