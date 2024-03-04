import { log } from 'console';
import * as dotenv from 'dotenv';

dotenv.config({
  path: './.env'
});

export default async function globalSetup() {
  log('Global setup');
}
