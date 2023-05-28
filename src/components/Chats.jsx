import React, { useContext, useEffect, useState } from "react";
import profile from "../assets/profile.jpg";
import { db } from "../firebase";
import { AuthContext } from "../context/AuthContext";
import { doc, onSnapshot } from "firebase/firestore";
import { ChatContext } from "../context/ChatContext";

const Chats = () => {
  const [chats, setChats] = useState([]);
  const { currentUser } = useContext(AuthContext);
  const { dispatch } = useContext(ChatContext);

  // it is used to load chats when the component mounts or the currentUser.uid changes.
  useEffect(() => {
    // This function is used to fetch the chat data from the database.
    const getChats = () => {
      const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
        setChats(doc.data());
      });
      return () => {
        unsub();
      };
    };
    currentUser.uid && getChats();
  }, [currentUser.uid]);

  console.log(Object.entries(chats));
  // This function is used to handle the selection of a chat.
  //It dispatches a CHANGE_USER action with the selected user as the payload.
  const handleSelect = (u) => {
    dispatch({ type: "CHANGE_USER", payload: u });
  };
  // Returns the JSX structure for the Chats component.
  return (
    <div className="chats">
      {/*  it maps through each chat to create a div with the className "userChat" for each chat. */}
      {Object.entries(chats)
        ?.sort((a, b) => b[1].date - a[1].date)
        .map((chat) => (
          <div
            className="userChat"
            key={chat[0]}
            onClick={() => handleSelect(chat[1].userInfo)}
          >
            <img src={chat[1].userInfo.photoURL} alt="" />
            <div className="userChatInfo">
              <span>{chat[1].userInfo.displayName}</span>
              <p>{chat[1].lastMessage?.text}</p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Chats;
