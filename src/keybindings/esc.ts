import * as vscode from "vscode";
import { VimState } from "../models";

export default function registerEscKeybinding(
  context: vscode.ExtensionContext,
  vim: VimState
) {
  context.subscriptions.push(
    vscode.commands.registerCommand("vim-for-vscode.esc", () => {
      switch (vim.mode) {
        case "insert": {
          vim.changeMode("normal");
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
