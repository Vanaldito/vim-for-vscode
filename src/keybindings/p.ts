import * as vscode from "vscode";
import { insertCharacter } from "../helpers";
import { VimState } from "../models";

function pasteLikeVim() {
  const editor = vscode.window.activeTextEditor;
  if (!editor) {
    return;
  }

  editor.edit(async editBuilder => {
    let text = await vscode.env.clipboard.readText();

    if (text.endsWith("\n")) {
      editBuilder.insert(
        new vscode.Position(editor.selection.active.line + 1, 0),
        text
      );
    } else {
      vscode.commands.executeCommand("editor.action.clipboardPasteAction");
    }
  });
}

export default function registerPKeybinding(
  context: vscode.ExtensionContext,
  vim: VimState
) {
  context.subscriptions.push(
    vscode.commands.registerCommand("vim-for-vscode.p", () => {
      switch (vim.mode) {
        case "normal": {
          pasteLikeVim();
          break;
        }
        case "insert": {
          insertCharacter("p");
          break;
        }
        case "visual": {
          pasteLikeVim();
          vim.changeMode("normal");
          break;
        }
      }
    })
  );
}
