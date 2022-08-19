import React, {useEffect, useState} from 'react';

import DragNDrop from '../dndSchedule/DragNDrop'
import style from '../dndSchedule/style.module.scss';

const defaultData = [
  {title: 'group 1', items: ['1', '2', '3']},
  {title: 'group 2', items: ['4', '5']}
]

function VisualScheduleApp() {
  const [data, setData] = useState();  
  useEffect(() => {
    if (localStorage.getItem('List')) {
      console.log(localStorage.getItem('List'))
      setData(JSON.parse(localStorage.getItem('List')))
    } else {
      setData(defaultData)
    }
  }, [setData])
  return (
    <div className={style.scheduleApp}>
      <header className={style.Appheader}>
      <DragNDrop data={data} />
      <div className={style.dragndrop}>
        {data.map((grp, grpI) => (
          <div key={grp.title} className={style.dndgroup}>
            {grp.items.map((item, itemI) => (
              <div draggable key={item} className={style.dnditem}>
                {item}
              </div>
            ))}
          </div>
        ))}
        </div>

          <div className={style.dragndrop}>
            <div className={style.dndgroup}>
              <div className={style.grouptitle}>Group 1</div>
              <div className={style.dnditem}>
                <div>
                  <p>ITEM 1</p>
                </div>
              </div>
              <div className={style.dnditem}>
                <div>
                  <p>ITEM 2</p>
                </div>
              </div>
              <div className={style.dnditem}>
                <div>
                  <p>ITEM 3</p>
                </div>
              </div>
            </div>
            <div className={style.dndgroup}>
            <div className={style.grouptitle}>Group 1</div>
              <div className={style.dnditem}>
                <div>
                  <p>ITEM 1</p>
                </div>
              </div>
              <div className={style.dnditem}>
                <div>
                  <p>ITEM 2</p>
                </div>
              </div>
            </div>
          </div>
      </header>
    </div>
  );
}

export default VisualScheduleApp;