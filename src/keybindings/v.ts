import * as vscode from "vscode";
import { insertCharacter } from "../helpers";
import { VimState } from "../models";

export default function registerVKeybinding(
  context: vscode.ExtensionContext,
  vim: VimState
) {
  context.subscriptions.push(
    vscode.commands.registerCommand("vim-for-vscode.v", () => {
      switch (vim.mode) {
        case "normal": {
          vim.changeMode("visual");
          break;
        }
        case "insert": {
          insertCharacter("v");
          break;
        }
        case "visual": {
          vscode.commands.executeCommand("cancelSelection");
          vim.changeMode("normal");
          break;
        }
      }
    })
  );
}
