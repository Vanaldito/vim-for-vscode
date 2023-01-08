import * as vscode from "vscode";
import { changeVimMode } from "./helpers";
import { registerIKeybinding } from "./keybindings";
import { VimState } from "./models";

export const vim: VimState = {
  mode: "normal",
};

export function activate(context: vscode.ExtensionContext) {
  vscode.commands.executeCommand("setContext", "vimActive", true);
  changeVimMode("normal", vim);

  registerIKeybinding(context, vim);
}

export function deactivate() {}
