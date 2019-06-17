# React-Native Component Generator

Simple, template-based React-Native component generator for VS Code.

Based on the generate-react-component extension by [@joshjg](https://github.com/joshjg/vscode-generate-react-component).
His extension stopped working on February 2019 because of a VSCode update, and since it hasn't been fixed by the time this version was released (June 17th, 2019), I took the liberty to create this extension by applying [@nonjene's pull request](https://github.com/joshjg/vscode-generate-react-component/pull/6) to fix it and adapted it to generate React-Native components.

## Usage
* Right click any directory in the explorer panel
* Select React-Native Component
* Input name and choose options
* Submit

## What's the deal with these files?

The default templates are opinionated, admittedly. They adhere to the best practices promoted in [this video by Scott Bowler](https://www.youtube.com/watch?v=TQ4wW63eoIY).
* When asked, type `y` or `n` to use (styled-components)[https://www.styled-components.com/]. If you don't wanna use styled-components, the component will be generated with a StyleSheet import from React-Native and styles setup. The `SomeComponentStyles.js` will still be generated, you can either use it or delete it. If you have suggestions or know how to tell vscode to not generate it in case the generator doesn't use styled-components, feel free to send a pull request. 
* `package.json` simply passes the component through so you can `import SomeComponent from '/components/SomeComponent'`

However, this package does not force these principles. You can easily customize the templates to match your own tech stack.

## Extension Settings

The component templates are completely customizable. You can add additional boolean options to the generator panel from the package's settings. One option is included by default: `StyledComponents` determines whether to insert styled-components declarations in your component.

This extension contributes the following settings:
react-native-component-generator
* `react-native-component-generator.conditionals`: Array of strings which will toggle certain portions of your templates.
* `react-native-component-generator.componentTemplatePath`: Absolute path to custom **component** template directory. If left blank, defaults to built-in template.
* `react-native-component-generator.containerTemplatePath`: Absolute path to custom **classComponent** template directory. If left blank, defaults to built-in template.

### Syntax

Template syntax is very simple:

* Any occurrence of `__ComponentName__` in a filename or a file's content will be replaced with the user's text input.
* Any text surrounded by `/* IF condition */` and `/* ENDIF */`, where `condition` is the name of an option (defined in the package settings) will be removed unless `condition` is enabled (or invalid)
* Any text surrounded by `/* IF !condition */` and `/* ENDIF */` will be removed unless `condition` is disabled (or invalid)
* Any remaining `/* IF */` or `/* ENDIF */` comments will be removed, but the text between them will be untouched
