// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { spawnSync } from 'child_process';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// TODO:
	let disposable = vscode.commands.registerCommand('lighthouse.call', () => {
		let result = spawnSync("lh", ["on"]);
		if (result.error) {
			handleError(result.error);
		} else if (result.status !== 0) {
			vscode.window.showErrorMessage(result.stderr);
		}
	});
	
	disposable = vscode.commands.registerCommand('lighthouse.on', () => {
		let result = spawnSync("lh", ["on"]);
		if (result.error) {
			handleError(result.error);
		} else if (result.status !== 0) {
			vscode.window.showErrorMessage(result.stderr);
		}
	});

	// TODO:
	disposable = vscode.commands.registerCommand('lighthouse.id.on', () => {
		let result = spawnSync("lh", ["off"]);
		if (result.error) {
			handleError(result.error);
		} else if (result.status !== 0) {
			vscode.window.showErrorMessage(result.stderr);
		}
	});

	disposable = vscode.commands.registerCommand('lighthouse.off', () => {
		let result = spawnSync("lh", ["off"]);
		if (result.error) {
			handleError(result.error);
		} else if (result.status !== 0) {
			vscode.window.showErrorMessage(result.stderr);
		}
	});

	// TODO:
	disposable = vscode.commands.registerCommand('lighthouse.id.off', () => {
		let result = spawnSync("lh", ["off"]);
		if (result.error) {
			handleError(result.error);
		} else if (result.status !== 0) {
			vscode.window.showErrorMessage(result.stderr);
		}
	});

	// TODO:
	disposable = vscode.commands.registerCommand('lighthouse.state', () => {
		let result = spawnSync("lh", ["off"]);
		if (result.error) {
			handleError(result.error);
		} else if (result.status !== 0) {
			vscode.window.showErrorMessage(result.stderr);
		}
	});

	// TODO:
	disposable = vscode.commands.registerCommand('lighthouse.id.state', () => {
		let result = spawnSync("lh", ["off"]);
		if (result.error) {
			handleError(result.error);
		} else if (result.status !== 0) {
			vscode.window.showErrorMessage(result.stderr);
		}
	});

	// TODO:
	disposable = vscode.commands.registerCommand('lighthouse.bri', () => {
		let result = spawnSync("lh", ["off"]);
		if (result.error) {
			handleError(result.error);
		} else if (result.status !== 0) {
			vscode.window.showErrorMessage(result.stderr);
		}
	});

	// TODO:
	disposable = vscode.commands.registerCommand('lighthouse.id.bri', () => {
		let result = spawnSync("lh", ["off"]);
		if (result.error) {
			handleError(result.error);
		} else if (result.status !== 0) {
			vscode.window.showErrorMessage(result.stderr);
		}
	});

	// TODO:
	disposable = vscode.commands.registerCommand('lighthouse.color', () => {
		let result = spawnSync("lh", ["off"]);
		if (result.error) {
			handleError(result.error);
		} else if (result.status !== 0) {
			vscode.window.showErrorMessage(result.stderr);
		}
	});

	// TODO:
	disposable = vscode.commands.registerCommand('lighthouse.id.color', () => {
		let result = spawnSync("lh", ["off"]);
		if (result.error) {
			handleError(result.error);
		} else if (result.status !== 0) {
			vscode.window.showErrorMessage(result.stderr);
		}
	});

	// TODO:
	disposable = vscode.commands.registerCommand('lighthouse.loop', () => {
		let result = spawnSync("lh", ["off"]);
		if (result.error) {
			handleError(result.error);
		} else if (result.status !== 0) {
			vscode.window.showErrorMessage(result.stderr);
		}
	});

	// TODO:
	disposable = vscode.commands.registerCommand('lighthouse.id.loop', () => {
		let result = spawnSync("lh", ["off"]);
		if (result.error) {
			handleError(result.error);
		} else if (result.status !== 0) {
			vscode.window.showErrorMessage(result.stderr);
		}
	});

	// TODO:
	disposable = vscode.commands.registerCommand('lighthouse.info', () => {
		let result = spawnSync("lh", ["off"]);
		if (result.error) {
			handleError(result.error);
		} else if (result.status !== 0) {
			vscode.window.showErrorMessage(result.stderr);
		}
	});
	
	context.subscriptions.push(disposable);
}


// this method is called when your extension is deactivated
export function deactivate() { }

function handleError(error: NodeJS.ErrnoException) {
	// Lighthouse is not installed
	if (error.code === "ENOENT") {
		// TODO: Give a more detailed error message with instructions
		vscode.window.showErrorMessage("Lighthouse module not installed!");
	} else {
		vscode.window.showErrorMessage(error.message);
	}
}