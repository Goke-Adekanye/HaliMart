import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./styles/commentForm.css";
import { Create } from "@material-ui/icons";
import { submitComment } from "../../redux/actions/dataActions";

export default function CommentForm({ productId }) {
  const { errors } = useSelector((state) => state.ui);
  const dispatch = useDispatch();

  const [input, setInput] = useState("");
  // const [error, setError] = useState(errors);

  // useEffect(() => {
  //   setError(errors);
  // }, [errors]);

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(submitComment(productId, { body: input }));
    setInput("");
  };

  //   if (!errors && !loading) {
  //     setInput("");
  //     setError({});
  //   }

  return (
    <>
      <div className="comment_input">
        <Create />
        <form>
          <input
            value={input}
            onChange={(event) => setInput(event.target.value)}
            type="text"
            placeholder="Add a review"
          />
          <button type="submit" onClick={handleSubmit}></button>
        </form>
      </div>
      {errors.comment && <small> {errors.comment}</small>}
    </>
  );
}
