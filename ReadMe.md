nx stuff
https://www.youtube.com/watch?v=ewqCGPH97Wg
https://www.youtube.com/watch?v=Y9ZgpvcFUXs

1. create empty nx workspace. Select apps 
npx create-nx-workspace ui-solution

2. add nrwl react dev dep
npm install @nrwl/react --save-dev

3. generate react app
npx nx generate @nrwl/react:app

4. add a library
npx nx g @nrwl/react:lib ui-library
npx nx serve ui-framework

5. add a component in the library
npx nx g @nrwl/react:component --project=ui-library ui-header

6. show dependency graph
npx nx dep-graph 

----------------
add express for an api

1. add nrwl express plugin
npm install --save-dev @nrwl/express

2. generate express application, see options
npx nx generate @nrwl/express:app --help

then use
npx nx generate @nrwl/express:app api --frontendProject=ui-framework
npx nx serve ui-framework-api

--------------
add simple ts lib for api url used by both express server and uif-framework
npx nx g @nrwl/workspace:lib ui-framework-api-interface
