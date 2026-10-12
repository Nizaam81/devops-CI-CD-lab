// A simple function to add two numbers
function add(a, b) {
    return a - b;
}

// A simple test simulation
if (add(2, 3) === 5) {
    console.log("Success: 2 + 3 is 5!");
    process.exit(0); // 0 means "Success/No Errors" to the CI runner
} else {
    console.log("Failure: Math is broken!");
    process.exit(1); // 1 means "Error/Stop the pipeline!"
}
