import React from "react";
import style from "../emotions/style.module.scss";

function Emotions ({ setOpenEmotions }) {
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
          <h1>ShowEmotioPicket</h1>
        </div>
        <div className={style.emoBody}>
          <p>Do you want <span>SHARE</span> your feeling with your family or friends?</p>
        </div>
        <div className={style.emoFooter}>
          <button
            onClick={() => {
              setOpenEmotions(false);
            }}
            id={style.cancelBtn}
          >
            No
          </button>
          <button
          onClick={() => {
            setOpenEmotions(false);
          }}
          id={style.emoFooter}
          >Yes</button>
        </div>
      </div>
    </div>
  );
}

export default Emotions;