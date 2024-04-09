function showSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
}
function hideSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
}
let next = document.querySelector('.next')


let prev = document.querySelector('.prev')

            next.addEventListener('click', function(){
                let items = document.querySelectorAll('.item')
                document.querySelector('.slide').appendChild(items[0])
            })

            prev.addEventListener('click', function(){
                let items = document.querySelectorAll('.item')
                document.querySelector('.slide').prepend(items[items.length - 1]) 
            })



const main ={
}
            
            
fetch("yala.json")
.then(response => response.json())
.then(data => {
    main.heading = data.heading;
    main.subheading = data.subheading;
    main.description = data.description;
    main.leopardHeading = data.leopardHeading;
    main.crocodileHeading = data.crocodileHeading;
    main.crocodileDescription = data.crocodileDescription;
    main.elephantHeading = data.elephantHeading;
    main.elephantDescription = data.elephantDescription;
    main.beeEaterHeading = data.beeEaterHeading;
    main.beeEaterDescription = data.beeEaterDescription;
    main.deerHeading = data.deerHeading;
    main.deerDescription = data.deerDescription;
    main.peacockHeading = data.peacockHeading;
    main.peacockDescription = data.peacockDescription;
            
    localStorage.setItem('main', JSON.stringify(main));
                
 })