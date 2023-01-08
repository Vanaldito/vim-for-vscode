import * as vscode from "vscode";
import { insertCharacter } from "../helpers";
import { VimState } from "../models";

export default function registerOKeybinding(
  context: vscode.ExtensionContext,
  vim: VimState
) {
  context.subscriptions.push(
    vscode.commands.registerCommand("vim-for-vscode.o", () => {
      switch (vim.mode) {
        case "normal": {
          vscode.commands.executeCommand("editor.action.insertLineAfter");
          vim.changeMode("insert");
          break;
        }
        case "insert": {
          insertCharacter("o");
          break;
        }
        case "visual": {
          const editor = vscode.window.activeTextEditor;
          if (!editor) {
            break;
          }
          editor.selection = new vscode.Selection(
            editor.selection.active,
            editor.selection.anchor
          );
          break;
        }
      }
    })
  );
}
