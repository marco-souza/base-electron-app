import { registerBrowserWindow } from "./window";


export async function register() {
  await Promise.all([
    // List off all modules to be registered
    registerBrowserWindow()
  ])
}
