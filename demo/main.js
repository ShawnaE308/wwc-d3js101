// step 1 - see how the variables can change background color, text
// as you will see, it is _very_ similar to jQuery in regards to syntax
// d3.select("body").style("background-color", "yellow");
// d3.select("body").append("p").text("Hello WWC DC!");
// d3.select("h1").style("color", "green");

// Step 2: D3 visuals are created in scalable vector graphics (SVG)
// So, let us add a SVG to the body! This will create our canvas to 
// create our visual
// d3.select("body").append("svg").attr("width", 960).attr("height", 500);

// Open up your browser and you will see the SVG that is appended to the body
// From this point forward, we will be adding onto the SVG and aving to write 
// d3.select('svg') gets annoying quickly. So, create a variable that will select the svg
// const svg = d3.select("svg");

//Set up the margins inside the SVG
// let margin = {top: 20, right: 20, bottom: 30, left: 40}
// let width = +svg.attr("width") - margin.left - margin.right;
// let height = +svg.attr("height") - margin.top - margin.bottom;

// We need spacing to create our visual. So lets do that...
// svg.attr("width", width + margin.left + margin.right)
//     .attr("height", height + margin.top + margin.bottom);

// So now, we have an empty box with a height 500px and a width of 900 px. Let us throw some shapes
// into this box. First, we will start off with a rectangle. We will start with a rectangle
// that is 100x50px. 

// svg.append("rect")
//     .attr("x", 10)
//     .attr("y", 10)
//     .attr("width", 100)
//     .attr("height", 50)
//     .style("fill", "orange");

// Now let us append a circle

// svg.append("circle")
//     .attr("cx", 150)
//     .attr("cy", 150)
//     .attr("r", 25)
//     .style("fill", "pink");

// To drive the point home, append an ellipse
// svg.append("ellipse")
//     .attr('cx', 200)
//     .attr('cy', 200)
//     .attr('rx', 30)
//     .attr('ry', 15);

