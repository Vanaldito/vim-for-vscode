import * as vscode from "vscode";
import { insertCharacter } from "../helpers";
import { VimState } from "../models";

export default function registerIKeybinding(
  context: vscode.ExtensionContext,
  vim: VimState
) {
  context.subscriptions.push(
    vscode.commands.registerCommand("vim-for-vscode.k", () => {
      switch (vim.mode) {
        case "normal": {
          vscode.commands.executeCommand("cursorUp");
          break;
        }
        case "insert": {
          insertCharacter("k");
          break;
        }
        case "visual": {
          vscode.commands.executeCommand("cursorUpSelect");
          break;
        }
      }
    })
  );
}
