# Angular-6-based-Even-Odd-Game-App-

Even-Odd-Gaming-App-using-ANGULAR-6
Understanding Component Binding in Angular!
This angular based mini project is written by using Component Binding.
1. There are 3 components: GameControl, Odd and Even
2. The GameControl Component have 2 buttons: "startGame" and "stopGame"
3. When starting the game, an event (holding a incrementing number) gets emitted each second (using setInterval()method)
4. This event should be listenable from outside the component. (using @Output)
5. When stop button is clicked, no more events get emitted (using clearInterval(ref))
6. the Odd component gets created for every odd number emitted by the GameControl component.
7. the same happens for the Even Component (on even numbers)
8. The output Odd - NUMBER and Even - NUMBER from the two components is displayed on the screen. (in container of app component)
Steps to run the program:
1. insall node.js
2. install Visual Code Studio IDE
3. run the npm command: npm install -g @angular/cli
4. create an Angular project using: ng new project-name
5. ng-serve
6. bootstrap css has been used for styling, after project setup, run the command: npm install --save bootstrap@3
7. after this, to inform angular about bootstrap add the following style in "styles" array of bootstrap in angular.json: node_modules/bootstrap/dist/css/bootstrap.min.css
