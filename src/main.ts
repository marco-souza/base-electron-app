import 'reflect-metadata'
import { container } from "tsyringe";
import { AppRunner } from './core/runner';
import { register } from './modules/register';


(async () => {
  await register()

  const runner = container.resolve(AppRunner)
  runner.run()
})()