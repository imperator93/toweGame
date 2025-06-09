import { Research } from "./ResearchModel";
import { TowerModel } from "./TowerModel";

export class TowerAttackSpeedResearch extends Research {
  upgradeTowerFireRate = (tower: TowerModel) => (tower.fireRate *= 1.2);
}

export class TowerDamageReasearch extends Research {
  upgradeTowerDamage = (tower: TowerModel) => (tower.damage *= 1.2);
}
