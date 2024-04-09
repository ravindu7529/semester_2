function showSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
}
function hideSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
}     

const main ={

}

fetch("wilpathu.json")
.then(response => response.json())
.then(data => {
    main.heading = data.heading;
    main.subheading = data.subheading;
    main.description = data.description;
   
    
    localStorage.setItem('main', JSON.stringify(main));
})