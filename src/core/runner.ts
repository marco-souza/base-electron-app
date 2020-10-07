import { inject, singleton } from "tsyringe";
import { AppWindow } from "./app";

@singleton()
export class AppRunner {
  constructor(@inject(AppWindow) protected app: AppWindow) {}

  run = () => this.app.show()
}