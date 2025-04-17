import express, { Router } from 'express';
import fs from 'fs';
import path from 'path';

const router = express.Router();

const routesPath = __dirname;
fs.readdirSync(routesPath).forEach((file) => {
  if (file === 'index.ts' || !file.endsWith('.ts') && !file.endsWith('.js')) return;
  
  const route = require(path.join(routesPath, file)).default;

  if (route && route instanceof Router) {
    const routeName = `/${file.split('.')[0]}`; 
    router.use(routeName, route as Router); 
  }
});

export default router;