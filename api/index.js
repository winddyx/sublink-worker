import { createApp } from '../dist/vercel/createApp.js';
import { createVercelRuntime } from '../src/runtime/vercel.js';

const runtime = createVercelRuntime(process.env);
const app = createApp(runtime);

export default app;
