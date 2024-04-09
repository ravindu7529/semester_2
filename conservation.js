function showSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
}
function hideSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
}

const main={

}

fetch("conservation.json")
.then(response => response.json())
.then(data=>{
    main.heading =data.heading;
    main.paragraph1 = data.paragraph1;    

    
    localStorage.setItem('main', JSON.stringify(main));
    
})