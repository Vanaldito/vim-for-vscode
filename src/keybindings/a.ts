import * as vscode from "vscode";
import { insertCharacter } from "../helpers";
import { VimState } from "../models";

export default function registerAKeybinding(
  context: vscode.ExtensionContext,
  vim: VimState
) {
  context.subscriptions.push(
    vscode.commands.registerCommand("vim-for-vscode.a", () => {
      switch (vim.mode) {
        case "normal": {
          vim.changeMode("insert");
          vscode.commands.executeCommand("cursorRight");
          break;
        }
        case "insert": {
          insertCharacter("a");
          break;
        }
      }
    })
  );
}
