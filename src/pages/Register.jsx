import profile from "../assets/profile.jpg";
import { Link, useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  getAuth,
  updateProfile,
} from "firebase/auth";
import { auth, storage, db } from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { useState } from "react";

const Register = () => {
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    const auth = getAuth();

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);

      // Create the file metadata
      /** @type {any} */
      const metadata = {
        contentType: "image/jpeg",
      };

      // Upload file and metadata to the object 'images/mountains.jpg'
      const storageRef = ref(storage, displayName);
      const uploadTask = uploadBytesResumable(storageRef, file, metadata);

      // Listen for state changes, errors, and completion of the upload.
      uploadTask.on(
        (error) => {
          // A full list of error codes is available at
          // https://firebase.google.com/docs/storage/web/handle-errors
          setError(true);
          switch (error.code) {
            case "storage/unauthorized":
              // User doesn't have permission to access the object
              console.log("Error: storage/unauthorized");
              break;
            case "storage/canceled":
              // User canceled the upload
              console.log("Error: storage/canceled");
              break;

            // ...

            case "storage/unknown":
              // Unknown error occurred, inspect error.serverResponse
              console.log("Error: storage/unknown");
              break;
          }
        },
        () => {
          // Upload completed successfully, now we can get the download URL
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL,
            });
            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              displayName: displayName.toLowerCase(),
              email,
              photoURL: downloadURL,
            });
            await setDoc(doc(db, "userChats", res.user.uid), {});
            navigate("/");
          });
        }
      );
    } catch (error) {
      setError(true);
    }
  };
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">React Chat</span>
        <span className="title">Register</span>
        <form onSubmit={handleSubmit}>
          <input required type="text" placeholder="display name" />
          <input required type="email" placeholder="email" />
          <input required type="password" placeholder="password" />
          <input required style={{ display: "none" }} type="file" id="file" />
          <label htmlFor="file">
            <img src={profile} alt="" />
            <span>Add an avatar</span>
          </label>
          <button>Sign up</button>
          {error && <span>Something went wrong</span>}
        </form>
        <p>You do have an account? Login</p>
      </div>
    </div>
  );
};

export default Register;
