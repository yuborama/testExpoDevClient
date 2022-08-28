export interface filterType {
  key: string;
  operator: "==" | "!=" | ">" | "<" | ">=" | "<=" | "CONTAINS" | "=";
  value: string;
}
