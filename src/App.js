import React, { useEffect} from "react";
import QuoteBox from "./components/QuoteBox";
import "font-awesome/css/font-awesome.min.css";
import "./assets/styles/global.scss";

function App() {
  useEffect(() => {
    document.title = "随机 名言 生成器"
  }, []);

  const backgroundStyle={
    background: "white",
    opacity: 0.8
  }


  return (
  <>
    <div className="sdfdsf">
      <a id="tweet-quote" href="https://sujeongheo401.github.io/XiangNi-/" style={backgroundStyle} target="_blank">
        开发者联系方式🤔
        <i className="fa fa-heart" />
      </a>
    <QuoteBox  />
    </div>
  </>
  );
}

export default App;
