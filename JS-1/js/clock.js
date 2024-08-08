function showTime(){
    let timeDOM = document.getElementById("myClock");
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const days = ['Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi'];
    const dayName = days[now.getDay()];
    timeDOM.innerHTML = hours+ ":"  +minutes + ":" + seconds + " " +dayName;
    
    setTimeout(showTime, 1000);


}
function showName() {
    const userName = prompt("Lütfen isminizi girin:");
    document.getElementById("myName").innerText = userName;
}

// Sayfa yüklendiğinde kullanıcı adını göster
window.onload = function() {
    //showName();
    showTime();
}



