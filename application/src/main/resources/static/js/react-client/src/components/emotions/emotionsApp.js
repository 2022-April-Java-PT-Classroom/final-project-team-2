import React, { useState } from "react";

import Emotions from "./emotions";
import style from '../emotions/style.module.scss'

function EmotionsApp() {
  const [emotionsOpen, setEmotionsOpen] = useState(false);
  const [emotionSelected, setEmotionSelected] = useState(null);


  const emotionSelectionHandler = (emotionSelected) => {
    setEmotionsOpen(true);
    setEmotionSelected(emotionSelected);
  }

  return (
    <div className={style.EmotionsApp}>
      <h1>Hello, How do you feel today?</h1>
      <div className={style.emojis}>
        <button
          className={style.openEmotionsBtn}
          onClick={() => {
            emotionSelectionHandler('🙂');
          }}
        >
          🙂
        </button>
        <button
          className={style.openEmotionsBtn}
          onClick={() => {
            emotionSelectionHandler('🤨');
          }}
        >
          🤨
        </button>
        <button
          className={style.openEmotionsBtn}
          onClick={() => {
            emotionSelectionHandler('😥');
          }}
        >
          😥
        </button>
        <button
          className={style.openEmotionsBtn}
          onClick={() => {
            emotionSelectionHandler('🤣');
          }}
        >
          🤣
        </button>
        <button
          className={style.openEmotionsBtn}
          onClick={() => {
            emotionSelectionHandler('🍕');
          }}
        >
          🍕
        </button>
        <button
          className={style.openEmotionsBtn}
          onClick={() => {
            emotionSelectionHandler('🏈');
          }}
        >
          🏈
        </button>
        <button
          className={style.openEmotionsBtn}
          onClick={() => {
            emotionSelectionHandler('🤢');
          }}
        >
          🤢
        </button>
      </div>

      {emotionsOpen && <Emotions setOpenEmotions={setEmotionsOpen} emotionSelected={emotionSelected} />}
    </div>
  );
}

export default EmotionsApp;