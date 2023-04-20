# IAginator 🤖🎨

# 🔨 This site is under construction!!! 

## Introduction

This is a Vue3 project using Typescript, it generates images by user inputs.

## What it does
IAginator generates images by text inputs. It receives 3 inputs from the user, they are:<br> 
The size of the image, the number of images and the text that the person wants to transform.<br>
In this project, the image generation engine, specifically the DALL·E model, is provided by OpenAI, .

## To build this, i used
- https://openai.com/product/dall-e-2
- Vue3 ✌️
- Vue Router 
- Vue Toastify
- Pinia 🍍
- TailwindCSS 
- Axios
- Dotenv

## Main tools, and why I used them

<details>
  <summary>Vue, router, toastify</summary>
  I used Vue3 for study purposes, but the application could be done with any framework, such as React or Angular.<br>
  The routing tool is used to allow the application to have a easy and maintainable multiple pages app.<br> 
  Toastify was a simple and quick approach to create error popups, confirmations or warnings on the screen
</details>

<details>
<summary>Pinia</summary>
Basically, I used Pinia to have more control over the application's state management, mainly to have a cleaner and more intuitive code.<br>
Vuex could also be used, but vue itself recommends Pinia for new projects and the migration of old projects to this tool.
</details>
<details>

<summary>Tailwind</summary>
Tailwind provides an inline way to manage an application's css styles.<br> 
I used it by preference, mainly to avoid spending a lot of time thinking about names for the HTML elements.
</details>

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Lints and fixes files
```
npm run lint
```
