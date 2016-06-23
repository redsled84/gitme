# gitme

Impractical single-page web app that displays your repositories and gists. Uses AngularJS as the front-end, AJAX requests to pull data from GitHub API, and the GitHub API as the 'back-end'.

## User login
![Alt text](/details/LOGIN.png?raw=true)

Pretty simple, enter your GitHub username and personal access token. If you don't know what that is or where to get one, just view the link provided on the login "page". As soon as the 'OK' button is clicked 'ng-click' hides the login div, shows the user div, and then retrieves user data via app.js and get.js.

## User pages
### Repositories
All your repositories and some specific data are displayed in this table
![Alt text](/details/USER_PAGE.png?raw=true)

### Gists
All your gists are displayed under the repositories table
![Alt text](/details/GISTS_PAGE.png?raw=true)
