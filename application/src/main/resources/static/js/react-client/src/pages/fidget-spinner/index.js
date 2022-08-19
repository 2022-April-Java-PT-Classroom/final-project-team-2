import React from "react"
import {NavLink} from "react-router-dom";
import style from "./style.module.scss";

const Spinner = () => {
  return (
    <div classname={style.fidget-spinner-container}>
  <div classname={style.invisible-circle-container}>
    <div classname={style.invisible-circle1-container}>
      <div classname={style.invisible-circle1}></div>
    </div>
    <div classname={style.invisible-circle2-container}>
      <div classname={style.invisible-circle2}></div>
    </div>
    <div classname={style.invisible-circle3-container}>
      <div classname={style.invisible-circle3}></div>
    </div>
  </div>
  <div classname={style.middle-circle-container}>
    <div classname={style.middle-circle-outer}>
      <div classname={style.middle-circle-inner}></div>
    </div>
  </div>
  <div classname={style.fidget-spinner}>
    <div classname={style.circle1a}>
      <div classname={style.circle1b}>
        <div classname={style.circle1c}>
          <div classname={style.circle1d}></div>
        </div>
      </div>
    </div>
    <div classname={style.circle2a}>
      <div classname={style.circle2b}>
        <div classname={style.circle2c}>
          <div classname={style.circle2d}></div>
        </div>
      </div>
    </div>
    <div classname={style.circle3a}>
      <div classname={style.circle3b}>
        <div classname={style.circle3c}>
          <div classname={style.circle3d}></div>
        </div>
      </div>
    </div>
  </div>
  <div classname={style.middle-body-circle-container}>
    <div classname={style.middle-body-circle}></div>
  </div>
</div>
  )

}

export default Spinner;