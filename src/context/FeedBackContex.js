import { createContext, useState } from "react";
import { v4 as uuid } from "uuid";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedBack, setFeedback] = useState([
    { id: 1, text: "this is a feedback", rating: 10 },
  ]);
  const [feedBackEdit, setFeedbackEdit] = useState({ item: {}, edit: false });
  const deleteFeedback = (ID) => {
    if (window.confirm("Are you sure you want to delete? ")) {
      setFeedback(feedBack.filter((item) => item.id !== ID));
    }
  };

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuid();
    setFeedback([newFeedback, ...feedBack]);
  };

  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    });
  };

  const updateFeedback = (id, updItem) =>{
    setFeedback(feedBack.map((item) => {
          if (item.id === id) {
            return {...item,...updItem };
          }
          return item;
        }));
  }

  return (
    <FeedbackContext.Provider
      value={{
        feedBack,
        deleteFeedback,
        addFeedback,
        editFeedback,
        feedBackEdit,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
