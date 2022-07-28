import React, { useState } from "react";

import Emotions from "./emotions";
import style from '../emotions/style.module.scss'

function EmotionsApp() {
  const [emotionsOpen, setEmotionsOpen] = useState(false);

  return (
    <div className={style.EmotionsApp}>
      <h1>Hello, How do you feel today?</h1>
      <div className={style.emojis}>
      <button
        className={style.openEmotionsBtn}
        onClick={() => {
          setEmotionsOpen(true);
        }}
      >
        🙂
      </button>
      <button
        className={style.openEmotionsBtn}
        onClick={() => {
          setEmotionsOpen(true);
        }}
      >
        🤨
      </button>
      <button
        className={style.openEmotionsBtn}
        onClick={() => {
          setEmotionsOpen(true);
        }}
      >
        😥
      </button>
      <button
        className={style.openEmotionsBtn}
        onClick={() => {
          setEmotionsOpen(true);
        }}
      >
        🤣
      </button>
      </div>

      {emotionsOpen && <Emotions setOpenEmotions={setEmotionsOpen} />}
    </div>
  );
}

export default EmotionsApp;