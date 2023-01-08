import * as vscode from "vscode";

export default function insertCharacter(character: string) {
  const editor = vscode.window.activeTextEditor;

  if (!editor) {
    return;
  }

  const position = editor.selection.active;

  editor.edit(editBuilder => editBuilder.insert(position, character));
}
