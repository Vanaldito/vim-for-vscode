import * as vscode from "vscode";
import { insertCharacter } from "../helpers";
import { VimState } from "../models";

export default function register0Keybinding(
  context: vscode.ExtensionContext,
  vim: VimState
) {
  context.subscriptions.push(
    vscode.commands.registerCommand("vim-for-vscode.0", () => {
      switch (vim.mode) {
        case "normal": {
          vscode.commands.executeCommand("cursorLineStart");
          break;
        }
        case "insert": {
          insertCharacter("0");
          break;
        }
        case "visual": {
          vscode.commands.executeCommand("cursorLineStartSelect");
          break;
        }
      }
    })
  );
}
