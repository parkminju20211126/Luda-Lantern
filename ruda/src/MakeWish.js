import React from "react";
import "./MakeWish.css";
import { Link, Route, Switch, BrowserRouter as Router } from "react-router-dom";
function MakeWish() {
  return (
    <>
    <div className="wrapper_wish">
        <h2>소원적기</h2>
        <p>종이에 소원을 적어보세요</p>
    </div>
    </>
  );
}

export default MakeWish;
