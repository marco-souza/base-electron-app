import { inject, singleton } from "tsyringe";
import { BrowserWindow } from "electron";

const filepath = "../resources/index.html"

@singleton()
export class AppWindow {
  constructor(
    @inject('window') protected window: BrowserWindow
  ) {
    this.window.loadFile(filepath)
    this.window.webContents.openDevTools()
    this.window.hide()
  }

  show = () => this.window.show()
}