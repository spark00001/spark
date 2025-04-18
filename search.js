document.getElementById('searchInput').addEventListener('keyup', function() {
    const filter = this.value.toLowerCase();
    const items = document.querySelectorAll('#itemList .item');

    items.forEach(item => {
        const text = item.querySelector('span').textContent.toLowerCase();
        if (text.includes(filter)) {
            item.classList.remove('hidden');
        } else {
            item.classList.add('hidden');
        }
    });
});




<!-- url -->



		<!-- url:2025 -->





		<!--url:2022-->


function mocn_knight(){
location.assign("mocn_knight.html");
}
function halo(){
location.assign("halo.html");
}
function vikings_valhalla(){
location.assign("vikings_valhalla.html");
}
function the_northman(){
location.assign("the_northman.html");
}
function doctor_strange(){
location.assign("doctor_strange.html");
}
function memmory(){
location.assign("memmory.html");
}
function the_unbearable_weight_of_massive_talent(){
location.assign("the_unbearable_weight_of massive_talent.html");
}
function sonic_2(){
location.assign("sonic_2.html");
}
function morbius(){
location.assign("morbius.html");
}
function adam_project(){
location.assign("adam_project.html");
}
function batman(){
location.assign("batman.html");
}
function uncharted(){
location.assign("uncharted.html");
}
function death_on_the_nile(){
location.assign("death_on_the_nile.html");
}



		<!-- url:2021 -->



function kings_man(){
location.assign("kings_man.html");
}
function money_heist_sfive(){
location.assign("money_heist_s5.html");
}
function free_guy(){
location.assign("free_guy.html");
}



