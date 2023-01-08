import * as vscode from "vscode";
import { changeVimMode, insertCharacter } from "../helpers";
import { VimState } from "../models";

export default function registerIKeybinding(
  context: vscode.ExtensionContext,
  vim: VimState
) {
  context.subscriptions.push(
    vscode.commands.registerCommand("vim-for-vscode.i", () => {
      switch (vim.mode) {
        case "normal": {
          changeVimMode("insert", vim);
          break;
        }
        case "insert": {
          insertCharacter("i");
          break;
        }
      }
    })
  );
}
