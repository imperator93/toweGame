import { useState } from "react";
import style from "./TowerStyle.module.css";

export const Tower = ({ rotate }: { rotate: string }) => {
  const [isShooting, setIsShooting] = useState(true);
  return (
    <div className={style["tower-wrapper"]}>
      <div
        className={style["tower"]}
        style={{ "--rotate": rotate } as CSSModuleClasses}
      />
      <div
        style={
          {
            "--shootingSpeed": "2s",
            "--isActive": isShooting ? "block" : "none",
          } as CSSModuleClasses
        }
        className={style["cannonball"]}
      ></div>
    </div>
  );
};
