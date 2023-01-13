export interface VimState {
  mode: "normal" | "insert" | "visual";
  changeMode: (newMode: "normal" | "insert" | "visual") => void;
  copiedLine: string;
}
