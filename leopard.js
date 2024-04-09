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


fetch("leopard.json")
.then(response => response.json())
.then(data => {
    main.title = data.title;
    main.description = data.description;
    main.title1 = data.title1;
    main.description1 = data.description1;
    main.title2 = data.title2;
    main.description2 = data.description2;
    main.title3 = data.title3;
    main.description3 = data.description3;
    main.title4 = data.title4;
    main.title5 = data.title5;
    main.description4 = data.description4;
    main.description5 = data.description5;
    main.title6 = data.title6;
    main.description6 = data.description6;
    main.description7 = data.description7;

    localStorage.setItem('main', JSON.stringify(main));
    
})