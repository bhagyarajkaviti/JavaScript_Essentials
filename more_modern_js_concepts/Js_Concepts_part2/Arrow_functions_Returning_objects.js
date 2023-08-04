let createUser = name =>{
    return{
        firstName: name
    };
};
console.log(createUser("Bhagyaraj"))

// In simpler manner
let createUser2 = name => ({firstName:"RaviChandra"});
console.log(createUser2());