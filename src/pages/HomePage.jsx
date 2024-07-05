import React, { useRef } from "react";
import { setTrainer } from "../store/slices/trainer.slice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./styles/HomePage.css";

const HomePage = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const textInput = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(setTrainer(textInput.current.value.trim()));
    textInput.current.value = "";
    navigate("/pokedex");
  };

  return (
    <div className="homepage">
      <figure className="homepage__logo">
        <img src="./assets/pokedex logo.png" alt="pokedex logo" />
      </figure>
      <div className="homepage__wave">
        <h2>Hi trainer</h2>
        <p>To start give me your name</p>
        <form className="homepage__form" onSubmit={handleSubmit}>
          <input placeholder="type your name" ref={textInput} type="text" />
          <button className="homepage__btn">Start</button>
        </form>
      </div>
    </div>
  );
};

export default HomePage;
