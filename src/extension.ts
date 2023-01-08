import * as vscode from "vscode";
import { changeVimMode } from "./helpers";
import {
  registerEscKeybinding,
  registerHKeybinding,
  registerIKeybinding,
  registerJKeybinding,
  registerKKeybinding,
  registerLKeybinding,
} from "./keybindings";
import { VimState } from "./models";

export const vim: VimState = {
  mode: "normal",
};

export function activate(context: vscode.ExtensionContext) {
  vscode.commands.executeCommand("setContext", "vimActive", true);
  changeVimMode("normal", vim);

  registerIKeybinding(context, vim);
  registerEscKeybinding(context, vim);
  registerHKeybinding(context, vim);
  registerJKeybinding(context, vim);
  registerKKeybinding(context, vim);
  registerLKeybinding(context, vim);
}

export function deactivate() {}
