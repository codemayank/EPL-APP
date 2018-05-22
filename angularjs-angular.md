# Converting the angular.js EPL App to angular2 EPL App.

## Initial steps
1. As doing ng new <app-name> will create a new folder with its own git tracking(Not sure if that is the case.). Try to understand how we can use the same git tracking for the upgraded file.

### Answer
```bash
ng new <appName> --directory ./
```
This will create a fresh angular app in the same directory as your existing project resides and use the same git tracking.

## Converting controller to components.

