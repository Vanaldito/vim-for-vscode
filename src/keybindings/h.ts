import * as vscode from "vscode";
import { insertCharacter } from "../helpers";
import { VimState } from "../models";

export default function registerIKeybinding(
  context: vscode.ExtensionContext,
  vim: VimState
) {
  context.subscriptions.push(
    vscode.commands.registerCommand("vim-for-vscode.h", () => {
      switch (vim.mode) {
        case "normal": {
          vscode.commands.executeCommand("cursorLeft");
          break;
        }
        case "insert": {
          insertCharacter("h");
          break;
        }
        case "visual": {
          vscode.commands.executeCommand("cursorLeftSelect");
          break;
        }
      }
    })
  );
}
