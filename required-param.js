// How make passing argument mandatory?


function check() {
    throw new Error("Param is required.");
    
}

// ES6 default assignment

function enterName(name = check()) {
    // Name is required
    console.log(name)
}


enterName("khan");