import { MyIsland } from "./MyIsland";
import style from "./LayoutStyle.module.css";
import { EnemyIsland } from "./EnemyIsland";

export const Layout = () => {
  return (
    <div className={style["layout"]}>
      <EnemyIsland />
      <MyIsland />
    </div>
  );
};
