import * as vscode from "vscode";
import { VimState } from "../models";

export default function changeVimMode(
  newMode: "normal" | "insert" | "visual",
  vimState: VimState
) {
  vimState.mode = newMode;
  vscode.commands.executeCommand("setContext", "vim.mode", newMode);

  const editor = vscode.window.activeTextEditor;

  if (!editor) {
    return;
  }

  switch (newMode) {
    case "normal": {
      editor.options.cursorStyle = vscode.TextEditorCursorStyle.Block;
      break;
    }
    case "visual": {
      editor.options.cursorStyle = vscode.TextEditorCursorStyle.Block;
      break;
    }
    case "insert": {
      editor.options.cursorStyle = vscode.TextEditorCursorStyle.Line;
      break;
    }
  }
}
