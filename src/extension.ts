// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { spawnSync } from 'child_process';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	let disposable = vscode.commands.registerCommand('lighthouse.on', () => {
		let result = spawnSync("lh", ["on"]);
		let error: NodeJS.ErrnoException | undefined = result.error;
		if (error) {
			// Lighthouse is not installed
			if(error.code === "ENOENT") {
				// TODO: Give a more detailed error message with instructions
				vscode.window.showErrorMessage("Lighthouse module not installed!");
			} else {
				vscode.window.showErrorMessage(error.message);
			}
		} else if (result.status !== 0) {
			vscode.window.showErrorMessage(result.stderr);
		}
	});

	disposable = vscode.commands.registerCommand('lighthouse.off', () => {
		let result = spawnSync("lh", ["off"]);
		let error: NodeJS.ErrnoException | undefined = result.error;
		if (error) {
			// Lighthouse is not installed
			if(error.code === "ENOENT") {
				// TODO: Give a more detailed error message with instructions
				vscode.window.showErrorMessage("Lighthouse module not installed!");
			} else {
				vscode.window.showErrorMessage(error.message);
			}
		} else if (result.status !== 0) {
			vscode.window.showErrorMessage(result.stderr);
		}
	});

	context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() { }
