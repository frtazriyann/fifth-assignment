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


// Copy Functionality
let copyCount = parseInt(document.getElementById('copyCount').innerText)
function copyIcon(id1, id2) {
    document.getElementById(id1).addEventListener('click', function () {
        copyCount++
        document.getElementById('copyCount').innerText = copyCount

        let msg = document.getElementById(id2).innerText
        console.log(msg);

        navigator.clipboard.writeText(msg).then(function () {
            alert(Number has copied: ${msg})
        })
    })
}
copyIcon('copy-national', 'msg-national')
copyIcon('copy-police', 'msg-police')
copyIcon('copy-fire', 'msg-fire')
copyIcon('copy-ambulance', 'msg-ambulance')
copyIcon('copy-child', 'msg-child')
copyIcon('copy-corruption', 'msg-corruption')
copyIcon('copy-electricity', 'msg-electricity')
copyIcon('copy-brac', 'msg-brac')
copyIcon('copy-rail', 'msg-rail')


