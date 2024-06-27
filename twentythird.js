function outer(){  
    
    // lexical scoping 

    // a function declared inside another function has access to all the properties of the
    // outer function but the outer function doesn't have access to the properties of the
    // inner function and the other functions also declared within the same outer function also
    // have access to the properties of the outer function but the inner functions can't access
    // their properties within themselves this is called lexical scoping

    let username='madhav10mahajan';
    function inner(){
        let password='abc123';
        console.log('inner ',username);
    }
    function innertwo(){
        // console.log(password);
        console.log('innertwo ',username);
    }
    // console.log(password);
    inner();
    innertwo();
}

// outer();

function outertwo(){
    
    let name='madhav'
    function inner(){
        console.log(name);
    }
    return inner;
}

// this is an example of closure the entire lexical scope/ memory of the function is returned
// and not the just the function itself

let func=outertwo();
func();