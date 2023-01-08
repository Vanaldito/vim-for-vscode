import * as vscode from "vscode";
import {
  registerEscKeybinding,
  registerHKeybinding,
  registerIKeybinding,
  registerJKeybinding,
  registerKKeybinding,
  registerLKeybinding,
  registerVKeybinding,
} from "./keybindings";
import { VimState } from "./models";

const editorsInfo: { [uri: string]: { mode: "normal" | "insert" | "visual" } } =
  {};

export const vim: VimState = {
  mode: "normal",
  changeMode(newMode: "normal" | "insert" | "visual") {
    this.mode = newMode;

    vscode.commands.executeCommand("setContext", "vim.mode", newMode);

    const editor = vscode.window.activeTextEditor;

    if (!editor) {
      return;
    }

    if (!editorsInfo.hasOwnProperty(editor.document.uri.toString())) {
      editorsInfo[editor.document.uri.toString()] = {
        mode: "normal",
      };
    }

    switch (newMode) {
      case "normal": {
        editorsInfo[editor.document.uri.toString()].mode = "normal";
        editor.options.cursorStyle = vscode.TextEditorCursorStyle.Block;
        break;
      }
      case "visual": {
        editorsInfo[editor.document.uri.toString()].mode = "visual";
        editor.options.cursorStyle = vscode.TextEditorCursorStyle.Block;
        break;
      }
      case "insert": {
        editorsInfo[editor.document.uri.toString()].mode = "insert";
        editor.options.cursorStyle = vscode.TextEditorCursorStyle.Line;
        break;
      }
    }
  },
};

export function activate(context: vscode.ExtensionContext) {
  vscode.commands.executeCommand("setContext", "vimActive", true);
  vim.changeMode("normal");

  registerIKeybinding(context, vim);
  registerEscKeybinding(context, vim);
  registerHKeybinding(context, vim);
  registerJKeybinding(context, vim);
  registerKKeybinding(context, vim);
  registerLKeybinding(context, vim);
  registerVKeybinding(context, vim);

  vscode.window.onDidChangeActiveTextEditor(editor => {
    if (!editor) {
      return;
    }

    console.log(editor.document.uri.toString());

    if (!editorsInfo.hasOwnProperty(editor.document.uri.toString())) {
      editorsInfo[editor.document.uri.toString()] = {
        mode: "normal",
      };
    }

    vim.changeMode(editorsInfo[editor.document.uri.toString()].mode);
  });
}

export function deactivate() {}
