import * as vscode from "vscode";
import { insertCharacter } from "../helpers";
import { VimState } from "../models";

async function pasteLikeVim(vim: VimState) {
  const editor = vscode.window.activeTextEditor;

  if (!editor) {
    return;
  }

  const text = await vscode.env.clipboard.readText();

  if (text !== vim.copiedLine) {
    return vscode.commands.executeCommand("editor.action.clipboardPasteAction");
  }

  const activeLine = editor.selection.active.line;
  const numberOfCharacters = editor.document.lineAt(activeLine).text.length;

  if (vim.mode === "normal") {
    await editor.edit(editBuilder => {
      editBuilder.insert(
        new vscode.Position(activeLine, numberOfCharacters + 1),
        `\n${text}`
      );
    });
  } else if (vim.mode === "visual") {
    await editor.edit(editBuilder => {
      editBuilder.replace(editor.selection, `\n${text}\n`);
    });

    vim.changeMode("normal");
  }

  const position = new vscode.Position(activeLine + 1, 0);
  editor.selection = new vscode.Selection(position, position);
}

export default function registerPKeybinding(
  context: vscode.ExtensionContext,
  vim: VimState
) {
  context.subscriptions.push(
    vscode.commands.registerCommand("vim-for-vscode.p", () => {
      switch (vim.mode) {
        case "normal": {
          pasteLikeVim(vim);
          break;
        }
        case "insert": {
          insertCharacter("p");
          break;
        }
        case "visual": {
          pasteLikeVim(vim);
          break;
        }
      }
    })
  );
}
