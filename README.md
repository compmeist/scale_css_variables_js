# scale_css_variables_js
lightweight Javascript to set and scale css variable values

Features:
- will use the existing units of your css vars (e.g. 1.0em -> 1.2em, or 25px -> 33px)
- controls precision of floating point numbers
- lightweight
- works with any scope css that is accessible by querySelector()

Drawbacks:
- document.querySelector must be run ahead of time
- does not create any css variables
