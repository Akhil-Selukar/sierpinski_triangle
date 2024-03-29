# sierpinski_triangle
![](https://img.shields.io/github/stars/Akhil-Selukar/sierpinski_triangle.svg) ![](https://img.shields.io/github/forks/Akhil-Selukar/sierpinski_triangle.svg) ![](https://img.shields.io/github/issues/Akhil-Selukar/sierpinski_triangle.svg) 

#

[Sierpinski triangle](https://en.wikipedia.org/wiki/Sierpi%C5%84ski_triangle#:~:text=The%20Sierpi%C5%84ski%20triangle%20(sometimes%20spelled,recursively%20into%20smaller%20equilateral%20triangles.)) is a self-similar fractal. It consists of an equilateral triangle, with smaller equilateral triangles recursively removed from its remaining area. It is named after the Polish mathematician _Wacław Sierpiński_. It can be created by starting with one large, equilateral triangle, and then repeatedly cutting smaller triangles out of its center.

# About the code.
## Tech stack
This code is written by using [p5js](https://p5js.org/), it is a free and open source javascript library for creative coding, with a focus on making coding accessible and inclusive for artists, designers, educators, beginners, and anyone else.

## overview
This project is written using javascript library [p5js](https://p5js.org/) and follows the code structure of the same. All the drawing logic and canvas setup is present in *sketch.js* file where 'setup' function is used to create the canvas. All drawing work performed by 'draw' function. other functions are the helper function for specific tasks.

*Pin.js* is just a class to hold the coordinates of each point and to draw that point.

*index.html* is used to call the js files and to show the output in browser window.

### Algorithm
1. Draw three vertices of triangle on canvas.
2. Select a random point inside the triangle formed by the vertices.
3. Calculate midpoint of above random point and any one of the three vertices.
4. Draw that midpoint on the canvas.
5. Repeat step 3 and 4 by considering midpoint calculated in step 4 as new random point.

### Flowchart
```mermaid
flowchart TD
    A[Draw three vertices of triangle on canvas] --> B[Select a random point on canvas];
    B --> C{Is point inside the triangle?};
    C -- No --> B;
    C -- Yes --> D[Select random vertex out off original three vertices];
    D --> E[Calculate midpoint of the random point and vertex obtained above.];
    E --> F[Draw the midpoint on canvas];
    F --> G[Set midpoint as new random point];
    G --> D;
```

### How to run the code
#### Online demo
Please click [here](https://akhil-selukar.github.io/sierpinski_triangle/) to see the demo.

#### Using VS code editor
##### Prerequisite
1. VS code
2. [p5.vscode](https://marketplace.visualstudio.com/items?itemName=samplavigne.p5-vscode) extension
3. [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension

##### Steps
1. Clone and import the project to VS code editor.
2. click on 'Go Live' option present in lower right corner of your VS code.
3. The server will start and your default browser will open and program will run in the browser.

#### Using any simple text editor (notepad\notepad++)

##### Prerequisite
1. The text editor of your choice.

##### Steps
1. Clone the code and open **'index.html'** file in notepad++.
2. Replace line number 11 and 12 with below line.
```html
<script src="https://cdn.jsdelivr.net/npm/p5@1.0.0/lib/p5.js"></script>
```
3. Save and close the file.
4. Open **index.html** in browser of your choice, the code will run.

## Sample output
> output after very few iterations

![](https://github.com/Akhil-Selukar/sierpinski_triangle/blob/master/sample_output/op_01.png)

> output after moderate number of iterations

![](https://github.com/Akhil-Selukar/sierpinski_triangle/blob/master/sample_output/op_02.png)

> output after large number of iterations

![](https://github.com/Akhil-Selukar/sierpinski_triangle/blob/master/sample_output/op_03.png)

# Contributing
Contributions are always welcome!
This code might not be highly optimised and can be improved to great extent, so feel free to clone project and suggest any modification and improvement.

Author: [@Akhil-Selukar](https://github.com/Akhil-Selukar)

# Feedback or questions
For any feedback or doubts, feel free to drop an email at **akhilselukar.work@gmail.com**

