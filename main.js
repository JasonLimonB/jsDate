const fecha = document.querySelector("#fecha");
let todayDay = new Date().getDate();
let todayMonth = new Date().getMonth() + 1;
let todayYear = new Date().getFullYear();
let fullDateToday = (todayYear+","+todayMonth+","+todayDay);
console.log(new Date(fullDateToday).getTime());




fecha.addEventListener('change', ()=>{
    const newFecha = fecha.value.replace(/-/g, ",");
    console.log(newFecha);
    
    console.log(new Date(newFecha).getTime());
}); 

