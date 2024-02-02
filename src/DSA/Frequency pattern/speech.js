const gTTS = require('gtts');
      
var speech = `Hello and welcome to today's topic on the advantages and disadvantages of Angular, one of the most popular front-end web development frameworks.

First, let's start with the advantages.

Advantage 1: MVC Architecture
Angular follows the Model-View-Controller (MVC) architecture, which helps to separate the business logic from the presentation layer. This makes it easier to manage the code and maintain it over time.

Advantage 2: Two-way Data Binding
Angular supports two-way data binding, which means that changes made to the data are automatically reflected in the view, and vice versa. This reduces the amount of boilerplate code and makes development faster and more efficient.

Advantage 3: Dependency Injection
Angular has built-in support for dependency injection, which allows for easy management of dependencies and makes the code more modular and reusable. This helps to reduce the amount of code required, and makes it easier to maintain and scale the application.

Advantage 4: CLI Tools
Angular comes with powerful command line interface (CLI) tools that make it easy to create new projects, generate components, and perform other common tasks. This saves developers time and makes the development process more efficient.

Advantage 5: Large Community and Ecosystem
Angular has a large and active community of developers, which means that there are many resources available for learning and troubleshooting. Additionally, Angular has a large ecosystem of third-party libraries and tools that can be used to extend its functionality.

Now, let's move on to the disadvantages.

Disadvantage 1: Steep Learning Curve
Angular has a steep learning curve, which means that it can be difficult for new developers to get up to speed. Additionally, the documentation can be overwhelming, and there are many concepts to understand.

Disadvantage 2: Complexity
Angular is a complex framework, and it can be difficult to understand how all the different components fit together. This can make development slower and more difficult, especially for smaller projects.

Disadvantage 3: Performance Overhead
Angular can have a significant performance overhead, especially for larger applications. This is because it has a lot of built-in functionality that can slow down the application. Additionally, Angular's two-way data binding can sometimes cause performance issues if not used correctly.

Disadvantage 4: Limited SEO
Angular's default setup doesn't work well with search engine optimization (SEO). This is because Angular is a client-side framework, and the initial page load is empty until the Angular app is loaded, which can cause issues with search engines.

Disadvantage 5: Dependency on Google
Finally, Angular is developed and maintained by Google, which means that there is a risk of dependency on a single organization. If Google were to stop supporting Angular, it could be difficult to find developers with the necessary skills and knowledge to maintain the application.

So there you have it, the advantages and disadvantages of Angular. As with any technology, there are trade-offs, and it's up to developers to weigh them based on their specific needs and requirements.`
var gtts = new gTTS(speech, 'en');
  
gtts.save('Voice.mp3', function (err, result){
    if(err) { throw new Error(err); }
    console.log("Text to speech converted!");
});