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

fetch("intro.json")
.then(response => response.json())
.then(data => {
    main.title = data.title;
    main.description = data.description;
    
    main.title1 = data.title1;
    main.data1 = data.data1;

    main.title2 = data.title2;
    main.data2 = data.data2;
    
    main.title3 = data.title3;
    main.data3 = data.data3;

    main.title3 = data.title4;
    main.data3 = data.data4;

    main.nationalPark = data.nationalPark;
    main.animal = data.animal;
    main.facts = data.facts;

    main.nationalPark1 = data.nationalPark1;
    main.animal1 = data.animal1;
    main.facts1 = data.facts1;

    main.nationalPark2 = data.nationalPark2;
    main.animal2 = data.animal2;
    main.facts2 = data.facts2;

    main.nationalPark3 = data.nationalPark3;
    main.animal3 = data.animal3;
    main.facts3 = data.facts3;

    main.nav1 = data.nav1

    localStorage.setItem('main', JSON.stringify(main));
    
})



