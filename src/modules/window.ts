import { container } from "tsyringe";
import { app, BrowserWindow } from "electron";


export async function registerBrowserWindow() {
  await app.whenReady()
  const config = {
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  }
  container.register(BrowserWindow, { useValue: new BrowserWindow(config) })
  container.registerInstance('window', container.resolve(BrowserWindow))
}

