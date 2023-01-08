import * as vscode from "vscode";
import { changeVimMode } from "../helpers";
import { VimState } from "../models";

export default function registerEscKeybinding(
  context: vscode.ExtensionContext,
  vim: VimState
) {
  context.subscriptions.push(
    vscode.commands.registerCommand("vim-for-vscode.esc", () => {
      switch (vim.mode) {
        case "insert": {
          changeVimMode("normal", vim);
          break;
        }
        case "visual": {
          changeVimMode("normal", vim);
          break;
        }
      }
    })
  );
}
