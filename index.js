
    // js file
    let nameFile = document.getElementById('nameField')
    let ul = document.getElementById('nameList')

    /*
        যদি আমরা enter button click করলে কোন event হয় তার জন্য keypress event নিতে হবে ।
        function(event) নেয়া হয়েছে কারন এই event আমাদের target করতে হবে ।
    */
    nameField.addEventListener('keypress', function(event){
    //যদি event.keycode === 13 হয় তাহলে
    //event.target.value করলে output দেখাবে ।
    if (event.keyCode === 13){
            let name = event.target.value
            
            /*
            enter press হলে একটা li create হবে
            আর ul এ push করা হবে ।
            এটার জন্য একটা function দরকার কারন এটা function এর ভিতরে করা হবে ।
            */
        createLi(ul,name); //function call নিচে create করা হয়েছে।

        // input filed থেকে data clear করার জন্য 
        event.target.value = '' //empty করা দেয়া হয়েছে ।
    }
    })


    function createLi(ul, name){
        let li = document.createElement('li')
        li.className = 'list-group-item d-flex'
        //name মাবে value যেটা আমরা পাইছি argument হিসাবে ।
        li.innerHTML = name


        /*
        এখানে vaule delete করার জন্য 
        create element দিয়ে delete btn create করা হয়েছে ।
        */
       let span = document.createElement('span');
       span.innerHTML = 'X'
       span.className = 'mx-auto'
       span.style.color = 'red'
       span.style.cursor = 'pointer'

       // delet করার জন্য ।
       span.addEventListener('click', function(){
           ul.removeChild(li)
       })

       //span or delete btn li এর ভিতরে push করা হয়েছে । 
       li.appendChild(span)

       ul.appendChild(li)
    }
