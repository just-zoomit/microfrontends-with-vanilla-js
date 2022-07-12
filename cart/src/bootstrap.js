import faker from 'faker';



const mount = (el) => {
    const cartText = `<div> You have ${faker.random.number()} items in your cart</div>`;

    document.querySelector('#dev-cart').innerHTML = cartText;
    
}

/*
            Context/Situation #1

We are running this file in developement in isloation 
We are using out local index.html file
Which DEFNITELY has an element with an id of 'dev-products'
We want to immediately render our app into that element

*/

if(process.env.NODE_ENV === 'developement'){
    const el = document.querySelector('#cart-dev')

    if (el){
        console.log("Cart: We are probably running in isolation")
        mount(el)
    }
}


/*   
        Context/Situation #1
We are running this file in development or production through the 
CONTAINER app
No GUARENTEE that an element with  an id of 'dev-products'
exists
WE DO NOT WANT to try to immediately render the app,
SO We RELY ON THE EXPORT IN THIS CASE

*/

export {mount};