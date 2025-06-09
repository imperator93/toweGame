import { Research } from "./ResearchModel";
import { Structure } from "./StructureModel";
import { TowerModel } from "./TowerModel";

export class PlayerModel {
  id: string;
  health: number;
  money: number;
  reasearches: Research[];
  structures: Structure[];
  tower: TowerModel = new TowerModel();
  css: CSSModuleClasses = {
    "--shootingSpeed": "",
  };

  constructor(
    id: string,
    health: number,
    money: number,
    reasearches: Research[],
    structures: Structure[]
  ) {
    this.id = id;
    this.health = health;
    this.money = money;
    this.reasearches = reasearches;
    this.structures = structures;
  }
}
