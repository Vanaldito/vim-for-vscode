import * as vscode from "vscode";
import { insertCharacter } from "../helpers";
import { VimState } from "../models";

export default function registerIKeybinding(
  context: vscode.ExtensionContext,
  vim: VimState
) {
  context.subscriptions.push(
    vscode.commands.registerCommand("vim-for-vscode.j", () => {
      switch (vim.mode) {
        case "normal": {
          vscode.commands.executeCommand("cursorDown");
          break;
        }
        case "insert": {
          insertCharacter("j");
          break;
        }
      }
    })
  );
}
