import style from "./EnemyIslandStyle.module.css";
import { Tower } from "./Tower";

export const EnemyIsland = () => {
  return (
    <div>
      <div className={style["island"]}></div>
      <Tower rotate="" />
    </div>
  );
};
