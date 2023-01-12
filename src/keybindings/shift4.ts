import * as vscode from "vscode";
import { insertCharacter } from "../helpers";
import { VimState } from "../models";

export default function registerShift4Keybinding(
  context: vscode.ExtensionContext,
  vim: VimState
) {
  context.subscriptions.push(
    vscode.commands.registerCommand("vim-for-vscode.shift4", () => {
      switch (vim.mode) {
        case "normal": {
          vscode.commands.executeCommand("cursorLineEnd");
          break;
        }
        case "insert": {
          insertCharacter("$");
          break;
        }
        case "visual": {
          vscode.commands.executeCommand("cursorLineEndSelect");
          break;
        }
      }
    })
  );
}
