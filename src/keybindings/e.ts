import * as vscode from "vscode";
import { insertCharacter } from "../helpers";
import { VimState } from "../models";

export default function registerEKeybinding(
  context: vscode.ExtensionContext,
  vim: VimState
) {
  context.subscriptions.push(
    vscode.commands.registerCommand("vim-for-vscode.e", () => {
      switch (vim.mode) {
        case "normal": {
          vscode.commands.executeCommand("cursorWordEndRight");
          break;
        }
        case "insert": {
          insertCharacter("e");
          break;
        }
        case "visual": {
          vscode.commands.executeCommand("cursorWordEndRightSelect");
          break;
        }
      }
    })
  );
}
