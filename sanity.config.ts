import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import schemas from './sanity/schemas';

const config = defineConfig({
  projectId: 'fu9kj3sf',
  dataset: 'production',
  apiVersion: '2023-05-01',
  title: 'My Next Portfolio App',
  basePath: '/admin',
  plugins: [deskTool()],
  schema: { types: schemas }
});

export default config;