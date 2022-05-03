### Run project 
```node server.js ```
```cd public ```
```ng build --watch ```
<http://localhost:3000/>

### Project structure
> _project_ the root directory holding project
>> _server.js_ the server of the project, this will also be connected to MongoDB
>> _node_modules_  the required libraries for the back end; many belong to express 
>> _package.json_  dependencies and info for the backend ```npm install```

>> _public_
>>> _package.json_, _angular.json_  dependencies frontend info
>>> _e2e_, _tsconfig.json_, _tslint.json_ compilation (typescript), environment info:  		- 
>>> _.editorconfig_, _.gitignore_, _readme.md_ not important

>>>> _src_
>>>>> _app_  all modules, services generated for the app 
>>>>> _assets_ images, icons, other content used in the app  
>>>>> _index.html_ global template for app 
>>>>> _styles.css_ global stylesheet for app (components inherit)
>>>>> _favicon.ico_  logo image in tab 
>>>>> _environments_ testing or production info 
>>>>> _karma.conf.js_, _test.ts: declares variables for app imports, loads files 
>>>>> _main.ts_ checks environments folder
>>>>> _polyfills.ts_ relating to various versions of js 
>>>>> _tsconfig.app.json_, _tsconfig.spec.json_ configuration (and specific) to compile 
>>>>> _browserslistrc_ bug fix 
>>>>> _tslint.json_ standardizes casing in app 

### App Components:
> Components
> Services 
> Directives 

#### [] Choose Canvas 
>Very basic npm  
>> <https://kernhanda.github.io/tutorial-typescript-canvas-drawing/>
>> <https://github.com/leader22/simple-drawing-board.js/tree/v2.1.1/>

>Simple, modifiable: 
>> <https://github.com/Leimi/drawingboard.js#drawingboardjs/>

> Collaborative: 
>> <https://pusher.com/tutorials/collaborative-painting-angular/#realtime-painting/>

> Useful jquery plugins, color changers, etc..: 
<https://github.com/websanova/wPaint#wpaintjs/>
<http://literallycanvas.com/examples/images.html#as-the-background/>

