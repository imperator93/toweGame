import style from "./MyIslandStyle.module.css";
import { Structure } from "./Structure";
import { Tower } from "./Tower";

export const MyIsland = () => {
  const strArr = [1, 2, 3, 4, 5];

  return (
    <div style={{ transform: "scaleY(-1) scaleX(-1)" }}>
      <div className={style["island"]}>
        {strArr.map((str) => {
          return <Structure />;
        })}
      </div>
      <Tower rotate="180deg" />
    </div>
  );
};
