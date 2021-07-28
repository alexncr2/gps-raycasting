## gps-raycasting

The objective of this project is to explore Ray Casting. Ray Casting is a technique in computer graphics where light rays are cast from an origin point to a surface.

### About Raycasting

Raycasting is a rendering technique to create a 3D perspective in a 2D map. Back when computers were slower it wasn't possible to run real 3D engines in realtime, so raycasting was the first solution. Raycasting is very fast, because only a calculation has to be done for every vertical line of the screen. The most well known game that used this technique, is of course Wolfenstein 3D. [1]

### About this project

The project was made in React, using p5.js. The mouse is considered  the origin point of multiple rays of light emmitted in all directions from the point. The surfaces are lines that are randomly generated on the screen. As you move the mouse the rays will change shape and length, relatively to the closest surface.

A release version can be found at this link: https://alexncr2.github.io/gps-raycasting/.

[1] - https://lodev.org/cgtutor/raycasting.html
