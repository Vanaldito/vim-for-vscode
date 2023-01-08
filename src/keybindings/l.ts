import * as vscode from "vscode";
import { insertCharacter } from "../helpers";
import { VimState } from "../models";

export default function registerIKeybinding(
  context: vscode.ExtensionContext,
  vim: VimState
) {
  context.subscriptions.push(
    vscode.commands.registerCommand("vim-for-vscode.l", () => {
      switch (vim.mode) {
        case "normal": {
          vscode.commands.executeCommand("cursorRight");
          break;
        }
        case "insert": {
          insertCharacter("l");
          break;
        }
      }
    })
  );
}
