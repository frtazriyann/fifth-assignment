// Heart Count Functionality
let heartCount = parseInt(document.getElementById('heartCount').innerText)
function heartIcon(id) {
    document.getElementById(id).addEventListener('click', function () {
        heartCount++
        document.getElementById('heartCount').innerText = heartCount
        document.getElementById(id).classList.add('fa-solid', 'text-red-600')
    })
}
heartIcon('heart-national')
heartIcon('heart-police')
heartIcon('heart-fire')
heartIcon('heart-ambulance')
heartIcon('heart-child')
heartIcon('heart-corruption')
heartIcon('heart-electricity')
heartIcon('heart-brac')
heartIcon('heart-rail')


