import React, { useEffect, useState } from "react";
import { random } from "../../utils";
import { colors, quotes, picture } from "../../mock/data.js";

import "./styles.scss";

const QuoteBox = () => {
  const [currentQuote, setCurrentQuote] = useState({});
  const [currentTweet, setCurrentTweet] = useState("");
  
  const newQuote = () => {
    const randomColor = colors[Math.floor(random(0, colors.length - 1))];
    const randomQuote = quotes[Math.floor(random(0, quotes.length - 1))];
    const randomPic = picture[Math.floor(random(0, quotes.length - 1))];
    const tweet = `https://twitter.com/intent/tweet?hashtags=quotes&text="${randomQuote.quote}" ${randomQuote.author}`;

    document.documentElement.style.setProperty("--background", randomColor);
    // url('../../picture/leg.jpg')
    // document.documentElement.style.setProperty("--background-image",url('../..'+randomPic));
    setCurrentQuote(randomQuote);
    setCurrentTweet(tweet);
  };

  useEffect(() => {
    newQuote();
  }, []);

  return (
    <>
    <main id="quote-box">
      <div id="text">
        <p>
          <i className="fa fa-quote-left"> </i> {currentQuote.quote}
        </p>
        <p className="pinyin">
          [ {currentQuote.pinyin} ]
        </p>
        <p className="krmean">
          {currentQuote.krMean}
        </p>
      </div>
      <div id="author">
        <p>- {currentQuote.author}</p>
      </div>
      <div id="medias">
        <a id="tweet-quote" href={currentTweet}>
          <i className="fa fa-twitter" />
        </a>

        <button id="new-quote" onClick={newQuote}>
          New Quote
        </button>
      </div>

    </main>
    <bottom>
      <a href="https://m.blog.naver.com/PostView.naver?isHttpsRedirect=true&blogId=chinatancn&logNo=220734971121">来源</a>
    </bottom>
    </>
  );
};

export default QuoteBox;