import { createApp } from '../src/app/createApp.jsx';
import { createVercelRuntime } from '../src/runtime/vercel.js';

const runtime = createVercelRuntime(process.env);
const app = createApp(runtime);

export default app;
