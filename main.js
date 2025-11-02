const chart = document.querySelector("#chart").getContext('2d');

// create a new chart instance

new Chart(chart, {
    type: 'line',
    data:{
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov'],

        datasets: [
            {
                label: 'BTC',
                data: [29374, 33537, 49631, 59095, 57828, 36684, 33572, 39974, 48847, 48116, 61004],
                borderColor: 'red',
                borderWidth: 2
            },
            {
                label: 'ETH',
                data: [48116, 59095, 33572, 48847, 61004, 36684, 29374, 49631, 39974, 57828, 33537],
                borderColor: 'blue',
                borderWidth: 2
            }
        ]
    },

    options:{
        responsive: true
    }
})

// show or hide sidebar

const menubtn = document.querySelector('#menu-btn');
const closebtn = document.querySelector('#close-btn');
const sidebar = document.querySelector('aside');

menubtn.addEventListener('click', ()=>{
    sidebar.style.display = 'block';

})

closebtn.addEventListener('click', ()=>{
    sidebar.style.display = 'none'
})

//change theme

const themebtn = document.querySelector('.theme-btn');

themebtn.addEventListener('click', ()=>{
    document.body.classList.toggle('dark-theme');
    themebtn.querySelector('span:first-child').classList.toggle('active');
    themebtn.querySelector('span:last-child').classList.toggle('active');
})