# Project 2 Feedback

## Code Quality - Excelling

Criteria: Is the code well-formatted? Are variable and function names semantic and sensible? Is the code easy to read and understand?

### Strengths:

-   Excellent job here writing clean, easy-to-understand, and well-formatted code.
-   Your components are named in a straightforward way as are all of your variables.
-   You did an amazing job refactoring your React app to better exemplify React principles after you hit MVP, and the results speak for themselves!

### Areas for Growth:

-   Very minor suggestion: in your fetch method in the `App.js` component, use camel-casing for `nameurl` and `cityurl`. You could do `nameURL` or `nameUrl`. You could also DRY that part up a little by saving the main body of the URL and switching out the other variables.
-   Delete any empty or unused files, such as `index.css` (you'll have to remove the import statement in `index.js` as well).
-   I would consider having separate .css files for major components; that way your `App.css` file doesn't get so long, and you can separate concerns for each component across different stylesheets.

## Technical Requirements - Excelling

Criteria: How does the project stack up to the requirements for this project? Is the developer making use of the material we've covered in a way that makes sense?

### Strengths:

-   Your application shows that you're gaining a deep understanding of React, as well as mastering the fundamentals of front-end development (working with HTML, CSS and JS).
-   Application demonstrates key React features and best practices including unidirectional data flow, UI compartmentalization, and logical component hierarchy.
-   Third-party API calls are handled correctly in `App.js` and successfully pass data down to child components.
-   Great job committing frequently, with descriptive commit messages.

### Areas for Growth:

-   One small change for how to write your Git commit messages: the standard format of a commit message is a present-tense verb followed by a short description of what occurred. So instead of "Readme update," it should be "update Readme", or instead of "Mobile friendly," "add mobile responsive styles," and so on. Also try to be as specific as possible; for example, for commit messages that say "bug fix," go into more detail with what bug you fixed. For more here is a great [resource](https://chris.beams.io/posts/git-commit/).

## Creativity and Interface - Performing

Criteria: Is the application easy to navigate? Does it work well in every major browser? Is it responsive? Does it incorporate modern UI Themes?

### Strengths:

-   Thirsty has a great, cohesive style. The design is simple and straightforward, but also sophisticated and professional. Even included a beer mug icon as a favicon!
-   The application is very easy and intuitive to navigate.
-   Nice work getting the app to be responsive to smaller screens.

### Areas for Growth

-   To make it look even better on mobile, I would try to fit that home page all on the mobile screen, instead of having the search forms, then scrolling down to see the `About.js` info.
-   On a widescreen monitor, the application looks a bit stretched out. This can be resolved by adding a max-width to the `body` in the CSS, though this will entail modifying some other styles as well to adjust.
-   In the `Results.js` component, consider adding a conditional so that if there is no data for a particular field, the result is "Unavailable" instead of a blank space. I added an example of how to do that for the phone-number category. The address category will take a little more thought and reworking to do the same, but it adds a bit more finesse to the results section.
-   A fun algorithmic challenge would be figure out how to format the phone-number result into a traditional xxx-xxx-xxxx format.
-   A nice little touch for the user would be to have the a message at the top that displays the search string being used. Included an example of how you could do that in `Results.js` by adding a `searchString` variable to state in `App.js`.

## Functionality - Excelling

Criteria: Does the application work without errors or bugs? Does it present a complete app, where every feature is fully implemented in a way that makes sense?

### Strengths:

-   All features are fully implemented with no errors in the browser or console.
-   The app works error-free for me, and I couldn't find a single bug.
-   I know you spent a lot of time working on the few bugs that you did encounter, and the effort you put into debugging and refactoring the app definitely helped resolve those issues.

### Areas for Growth:

-   One potential area for future work would be to have just one search form, and be able to toggle between searching by name/keyword or city/town. This would be better for UX as well as DRY up your code by removing the need for two separate search form components.

## Presentation - Performing

Criteria: Is there adequate documentation? Is the repository well-organized and free of clutter?

### Strengths:

-   Good work on creating a README that documents the creation of your project.
-   Repo is well-organized with a planning directory as well as separate images directory in the public folder.
-   Planning directory includes good insights on your planning process.

### Areas for Growth:

-   In the install directions, remember that users downloading the app also need to run `npm install` to download required dependencies.
-   Made a couple change to the formatting in your README markdown file. Easier on the eyes not to have too much bolded font.
-   Next time when writing user stories, write them in the following pattern: "As a user, I would like to **\_\_** so that **\_\_**." This tends to be the preferred format.
-   In the future when building React apps with more than a couple components, consider making a `components` directory where all non-App components live in their own folders, as well as their stylesheets.

## Hard Requirements - Complete:

-   [x] Your app must be a working, interactive, React application.
-   [x] It must include data from a third-party API.
-   [x] It must use at least 4 separate components.
-   [x] It must be deployed to the Web.
-   [x] It uses CSS Grid or Flex for layout and not floats.
-   [x] Your project repository must adequately documents your project and includes a line to the deployed app.
-   [x] You have used git for version control throughout the project.

## Grade: Pass
