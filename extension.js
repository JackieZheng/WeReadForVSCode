// @ts-nocheck
/*
 * @Author: your name
 * @Date: 2020-08-18 10:07:57
 * @LastEditTime: 2020-08-19 16:08:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \WeReadForVSCode\WeReadForVSCodeJackieZheng\extension.js
 */
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');
const {
	url
} = require('inspector');

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "WeReadForVSCodeJackieZheng" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with  registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('WeReadForVSCodeJackieZheng.Start', function () {
		// The code you place here will be executed every time your command is executed

		// Display a message box to the user
		//vscode.window.showInformationMessage('Hello World from WeReadForVSCode!');

		// 1.创建并显示Webview
		const panel = vscode.window.createWebviewPanel(
			// 该webview的标识，任意字符串
			'WeRead',
			// webview面板的标题，会展示给用户
			'微信读书',
			// webview面板所在的分栏
			vscode.ViewColumn.One,
			// 其它webview选项
			{
				enableScripts: true, // 启用JS，默认禁用
				retainContextWhenHidden: true, // webview被隐藏时保持状态，避免被重置
			}

		);
		//设置标题前图标

		//panel.iconPath = vscode.Uri.file(context.extensionPath + '/Images/iconDark.png');

		panel.iconPath = {
			dark: vscode.Uri.file(context.extensionPath + '/Images/iconDark.png'),
			light: vscode.Uri.file(context.extensionPath + '/Images/iconBlack.png')
		};

		panel.webview.html = `<!DOCTYPE html>
								<html lang="en">
								<head>
									<meta charset="UTF-8">
									<meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" name="viewport">
									<meta content="portrait" name="x5-orientation">
									<meta content="true" name="x5-fullscreen">
									<meta content="portrait" name="screen-orientation">
									<meta content="yes" name="full-screen">
									<meta content="webkit" name="renderer">
									<meta content="IE=Edge" http-equiv="X-UA-Compatible">
									<title>微信读书</title>
									<style>
									html,body,iframe{
										width:100%;
										height:100%;
										border:0;
										overflow: hidden;
									}
									</style>
								</head>
								<body>
									<iframe src="https://weread.qq.com/"/>
								</body>
								</html>`;
	});

	context.subscriptions.push(disposable);
}
exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}