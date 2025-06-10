import { Structure } from "./StructureModel";
import { Research } from "./ResearchModel";
import {
  TowerAttackSpeedResearch,
  TowerDamageReasearch,
} from "./TowerResearchModel";

export class TowerModel extends Structure {
  cost: number = 500;
  damage: number = 10;
  fireRate: number = 1000;
  upgrades: Research[] = [
    new TowerAttackSpeedResearch(
      "spdUpg",
      200,
      5,
      "Upgrade tower attack speed by 20%"
    ),
    new TowerDamageReasearch("dmgUpg", 750, 20, "Upgrade tower damage by 20%"),
  ];
}
