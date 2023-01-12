import * as vscode from "vscode";
import { insertCharacter } from "../helpers";
import { VimState } from "../models";

export default function registerWKeybinding(
  context: vscode.ExtensionContext,
  vim: VimState
) {
  context.subscriptions.push(
    vscode.commands.registerCommand("vim-for-vscode.w", () => {
      switch (vim.mode) {
        case "normal": {
          vscode.commands.executeCommand("cursorWordStartRight");
          break;
        }
        case "insert": {
          insertCharacter("w");
          break;
        }
        case "visual": {
          vscode.commands.executeCommand("cursorWordStartRightSelect");
          break;
        }
      }
    })
  );
}
