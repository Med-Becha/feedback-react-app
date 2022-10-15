import { createContext, useState, useEffect } from "react";


const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [feedBack, setFeedback] = useState([]);
  const [feedBackEdit, setFeedbackEdit] = useState({ item: {}, edit: false });
   


  const fetchFeedback = async () =>{
    const response = await fetch(`/feedback?_sort=id&_order=desc`)
    const data = await response.json();
    setFeedback(data)
    setIsLoading(false);
  }
  useEffect(()=>{
    fetchFeedback()
  },[])

  const deleteFeedback = async (ID) => {
    

    if (window.confirm("Are you sure you want to delete? ")) {
      await fetch(`/feedback/${ID}`, {method: 'DELETE'})
      setFeedback(feedBack.filter((item) => item.id !== ID));
    }
  };

  const addFeedback = async (newFeedback) => {
    const response = await fetch(`/feedback`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newFeedback),
    });

    const data = await response.json();

    setFeedback([data, ...feedBack]);
  };

  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    });
  };

  const updateFeedback = async(Id, updItem) =>{
    const response = await fetch(`/feedback/${Id}`,{
      method: "PUT",
      headers: {  "Content-Type": "application/json"},
    body: JSON.stringify(updItem)
  })
  const data = await response.json();
  setFeedback(feedBack.map((item) => item.id === Id ? {...item, ...data} : item));
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
        isLoading,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext
