import * as vscode from "vscode";
import { insertCharacter } from "../helpers";
import { VimState } from "../models";

export default function registerBKeybinding(
  context: vscode.ExtensionContext,
  vim: VimState
) {
  context.subscriptions.push(
    vscode.commands.registerCommand("vim-for-vscode.b", () => {
      switch (vim.mode) {
        case "normal": {
          vscode.commands.executeCommand("cursorWordStartLeft");
          break;
        }
        case "insert": {
          insertCharacter("b");
          break;
        }
        case "visual": {
          vscode.commands.executeCommand("cursorWordStartLeftSelect");
          break;
        }
      }
    })
  );
}
