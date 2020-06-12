# mern-docker-sandbox
A containerised MERN development environment using Docker and VSCode.

## Overview
This repo is intended to allow a faster start to developing full stack MERN applications. It includes all the boilerplate code, containers, networking and IDE setup required to quickly get started developing your MERN app.

It includes:
- Hot reloading of both server and client
- Automatic IDE setup \* *VSCode only*
- Standard `create-react-app` build
- Linting and formatting with ESLint and Prettier

*Note: The project structure and IDE setup are based on my personal preferences when starting a new MERN application. It is possible to change the configuration to better suit your needs.*

## Installation
> The IDE setup only works for VSCode but the docker containers will work regardless of IDE.

1. Make sure you have Docker installed
  - [Get Started with Docker](https://www.docker.com/get-started)

2. Install [VSCode](https://code.visualstudio.com/) and the [Remote Development extension pack](https://aka.ms/vscode-remote/download/extension)

3. Download the `mern-docker-sandbox` repository to your desired directory

3a. *OPTIONAL* - Edit the `.eslintrc.json` and/or `.prettierrc` files in the `client/` and `server/` directories to change the linting or formatting. Edit the `.devcontainer.json` files in the `client/` and `server/` directories to change the development environment.

4. Open a terminal window and navigate to the `mern-docker-sandbox` directory. Type the following to build the containers:

  ```
  docker-compose build
  ```
5. Open VSCode and run the **Remote-Containers: Open Folder in Container...** command from the Command Palette \(F1\) or quick actions Status bar item, and select the `client` folder.

6. Once the VSCode window has successfully attached to the `client` container, open a new VSCode window.

> `File --> New Window` or `Ctrl`+`Shift`+`N` by default.

  In this new window, repeat step 5 but select the `server` folder instead.

You can now visit http://localhost:3000 to see your client and http://localhost:8080 to see your server output.

> If you would like to interact with the mongo image directly, you can do so with a third VSCode window or by attaching a shell to that container.


