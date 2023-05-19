import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import schemas from './sanity/schemas';

const config = defineConfig({
  projectId: 'a9f08560',
  dataset: 'production',
  apiVersion: '2023-05-17',
  title: 'My Sanity Project',
  basePath: '/admin',
  plugins: [deskTool()],
  schema: { types: schemas }
});

export default config;