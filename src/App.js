import React, { useEffect } from "react";
import QuoteBox from "./components/QuoteBox";
import "font-awesome/css/font-awesome.min.css";
import "./assets/styles/global.scss";

function App() {
  useEffect(() => {
    document.title = "随机 名言 生成器"
  }, []);
  return <QuoteBox />;
}

export default App;
