import { useState, useContext, useEffect } from "react";
import Card from "./shared/Card";
import Button from "./shared/Button";
import RatingSelect from "./RatingSelect";
import FeedbackContext from "../context/FeedBackContex";

const FeedBackForm = () => {
  const [text, setText] = useState("");
  const [btnDisabled, serBtnDisabled] = useState(true);
  const [message, setMessage] = useState(" ");
  const [rating, setRating] = useState(10);

  const { addFeedback, feedBackEdit, updateFeedback } =
    useContext(FeedbackContext);

  useEffect(() => {
    if (feedBackEdit.edit === true) {
      serBtnDisabled(false);
      setText(feedBackEdit.item.text);
      setRating(feedBackEdit.item.rating);
    }
  }, [feedBackEdit]);

  const handleTextChange = (e) => {
    if (text === "") {
      serBtnDisabled(true);
      setMessage(null);
    } else if (text !== "" && text.trim().length <= 10) {
      serBtnDisabled(true);
      setMessage("Text must be at least 10 characters");
    } else {
      serBtnDisabled(false);
      setMessage(null);
    }
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length > 10) {
      const newFeedback = {
        text,
        rating,
      };
      if (feedBackEdit.edit === true) {
        updateFeedback(feedBackEdit.item.id, newFeedback);
      } else {
        addFeedback(newFeedback);
      }
      setText("");
    }
  };
  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate your service with us?</h2>
        <RatingSelect select={(rating) => setRating(rating)} />
        <div className="input-group">
          <input
            onChange={handleTextChange}
            type="text"
            placeholder="Write a review"
            value={text}
          />
          <Button className="btn" type="submit" isDisabled={btnDisabled}>
            Send
          </Button>
        </div>
        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  );
};

export default FeedBackForm;
