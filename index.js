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

fetch("index.json")
.then(response => response.json())
.then(data => {
    main.title = data.title;
    main.description = data.description;
    main.elephantTitle = data.title1;
    main.elephantData = data.content1;
    main.leopardTitle = data.title2;
    main.leopardData = data.content2;
    main.birdsTitle = data.title3;
    main.birdsData = data.content3;
    
    localStorage.setItem('main', JSON.stringify(main));
})
