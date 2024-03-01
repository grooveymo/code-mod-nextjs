# Dev notes (mo)

github repo: https://github.com/LJaks/react-ts-todo-app

had to switch to using node 14.16.0 to successfully deploy

e.g.
nvm install 14.16.0
nvm use 14.16.0

Switched to using react-scripts rather than craco to deploy (see package.json => scripts)

# React TypeScript Todo App

This project is created using Create React App and TailwindCSS, coded with TypeScript.

## Description

Basically it's simple Todo app with implemented input to add a new task, submit button. In the task list every task has it's own checkbox and a delete button. At the bottom of the task list follows the remaining task amount. When all tasks are finished and deleted from the list, notification pops up notifying about no todos left.
