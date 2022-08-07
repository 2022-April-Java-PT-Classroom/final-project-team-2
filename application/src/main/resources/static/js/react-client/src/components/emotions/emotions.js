import React from "react";
import style from "../emotions/style.module.scss";

function Emotions({ setOpenEmotions, emotionSelected }) {
  // console.log(sessionStorage.getItem('emotion'));

  const emotionShareHandler = (shareDecision) => {
    setOpenEmotions(false);
    if (shareDecision === 'yes') {
      sessionStorage.setItem('emotion', emotionSelected);
    }
  }



  return (
    <div className={style.emoBackground}>
      <div className={style.emoContainer}>
        <div className={style.titleCloseBtn}>
          <button
            onClick={() => {
              setOpenEmotions(false);
            }}
          >
            X
          </button>
        </div>
        <div className={style.title}>
          <h1>🤖</h1>
        </div>
        <div className={style.emoBody}>
          <p>Do you want <span>SHARE</span> it with your family or friends?</p>
        </div>
        <div className={style.emoFooter}>
          <button
            onClick={() => {
              emotionShareHandler('no');
            }}
            id={style.cancelBtn}
          >
            No
          </button>
          <button
            onClick={() => {
              emotionShareHandler('yes');
            }}
            id={style.emoFooter}
          >Yes</button>
        </div>
      </div>
    </div>
  );
}

export default Emotions;