import { Friend } from "./friend";

export interface Group {
  groupId?: string;
  name?: string;
  get?: number;
  owe?: number;
  image?: string;
  memberCount?: number;
  members?: Friend[];
  member?: string[];
}
