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
            alert(`Number has copied: ${msg}`)
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


// Calling functionality
let callHistoryData = []
let coinCount = parseInt(document.getElementById('coinCount').innerText)
function callIcon(id1, id2, id3) {
    document.getElementById(id1).addEventListener('click', function () {
        if (coinCount > 0) {
            coinCount -= 20
            document.getElementById('coinCount').innerText = coinCount
            alert(`📞 Calling ${document.getElementById(id3).innerText} ${document.getElementById(id2).innerText}.....`)
        }
        else {

            return (alert('❌ You do not have enough coin! You need atleast 20 points to call.'))
        }

        // Call History Functionality
        const data = {
            serviceName: document.getElementById(id3).innerText,
            phoneNumber: document.getElementById(id2).innerText,
            date: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true })
        }

        callHistoryData.push(data)

        const callHistoryContainer = document.getElementById('call-history-container')
        callHistoryContainer.innerText = ''
        for (const data of callHistoryData) {
            const div = document.createElement('div')

            div.innerHTML = `
                <div class="flex items-center justify-between p-4">
                <div>
                    <h1 class="font-semibold text-[18px] xl:text-[15px]">${data.serviceName}</h1>
                    <p class="text-gray-500 text-[18px]">${data.phoneNumber}</p>
                </div>
                <p class="text-[18px] xl:text-[14px]">${data.date}</p>
            </div>
            `
            callHistoryContainer.appendChild(div)

        }
    })
}
callIcon('call-national', 'msg-national', 'service-national')
callIcon('call-police', 'msg-police', 'service-police')
callIcon('call-fire', 'msg-fire', 'service-fire')
callIcon('call-ambulance', 'msg-ambulance', 'service-ambulance')
callIcon('call-child', 'msg-child', 'service-child')
callIcon('call-corruption', 'msg-corruption', 'service-corruption')
callIcon('call-electricity', 'msg-electricity', 'service-electricity')
callIcon('call-brac', 'msg-brac', 'service-brac')
callIcon('call-rail', 'msg-rail', 'service-rail')


// Clear Button functionality
document.getElementById('clearBtn').addEventListener('click', function () {
    callHistoryData = []
    document.getElementById('call-history-container').innerText = ''

})