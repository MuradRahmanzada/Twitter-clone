import React, { useState } from "react";
import "./TweetBox.css";
import { Button, Avatar } from "@material-ui/core";
import db from "../Firebase/Firebase";

const TweetBox = () => {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      displayName: "Michael Austin",
      userName: "Michael10",
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar:
        "https://img.favpng.com/7/16/22/programmer-computer-programming-computer-software-computer-icons-programming-language-png-favpng-nQrswvgdaKr9WK33JJEUZiidU.jpg",
    });

    setTweetImage("");
    setTweetMessage("");
  };

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox_input">
          <Avatar src="" />
          <input
            placeholder="What's happening? "
            type="text"
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
          />
          {/* <input placeholder="Enter image URL" type="text"/> */}
        </div>
        <input
          className="tweetBox_imageInput"
          placeholder="Optional: Enter image URL"
          type="text"
          onChange={(e) => setTweetImage(e.target.value)}
          value={tweetImage}
        />
        <Button onClick={sendTweet} type="submit" className="tweetBox_button">
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;
