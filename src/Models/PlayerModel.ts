import { Research } from "./ResearchModel";
import { Structure } from "./StructureModel";

export type PlayerModel = {
  id: string;
  health: number;
  money: number;
  reasearches: Research[];
  structures: Structure[];
};
