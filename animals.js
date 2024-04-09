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

fetch("animals.json")
.then(response => response.json())
.then(data=>{
    main.pageTitle =data.pageTitle;
    main.description = data.description;
    main.title1 = data.title1;
    main.title2 = data.title2;
    main.indigenousAnimal = data.indigenousAnimal;
    main.nationalParkSub1 = data.nationalParkSub1;
    main.nationalParkSub2 = data.nationalParkSub2;
    
    localStorage.setItem('main', JSON.stringify(main));
    
})