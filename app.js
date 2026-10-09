const days=[
['17.10.','Düsseldorf → San Diego','KLM 1796 und KLM 639. Ankunft 11:50 Uhr, Hertz-Übernahme 13:00 Uhr.','Best Western Yacht Harbor Hotel','Gebucht'],
['18.10.','Südkalifornien → Kalifornische Küste','Roadtrip-Tag; Übernachtung noch ergänzen.','','Noch prüfen'],
['19.10.','Kalifornische Küste → San Francisco','Weiterfahrt und Check-in.','Lombard Plaza Motel','Gebucht'],
['20.10.','San Francisco → Las Vegas','Hertz-Rückgabe 12:00 Uhr; Alaska 776 um 13:47 Uhr.','Excalibur Hotel & Casino','Gebucht'],
['21.10.','Las Vegas','Besichtigungen und Einkauf für die Wohnmobil-Tour.','Excalibur Hotel & Casino','Gebucht'],
['22.10.','Henderson → Chloride','Cruise America C25 übernehmen; Einkauf und Hoover Dam.','Chloride Campground','Noch prüfen'],
['23.10.','Kingman → Grand Canyon','Hackberry, Seligman, Williams und Mather Point.','','Geplant'],
['24.10.','Grand Canyon','Visitor Center, Yavapai Point, Bright Angel Trail und Hopi Point.','','Geplant'],
['25.10.','Grand Canyon','Desert View Drive, Lipan Point, Check-in etwa 15:00 Uhr.','Mather Campground','Gebucht'],
['26.10.','Grand Canyon → Page','08:30 Uhr Abfahrt, Horseshoe Bend, Lake Powell, Wahweap Overlook.','','Geplant'],
['27.10.','Page → Zion','Optional Antelope Canyon; 11:00 Uhr Abfahrt; Pa’rus Trail.','Watchman Campground','Gebucht'],
['28.10.','Zion → Valley of Fire','Riverside Walk, Fire Wave und Elephant Rock.','','Geplant'],
['29.10.','Valley of Fire → San Diego','RV tanken und etwa 10:00 Uhr zurückgeben; Hertz ab 11:30 Uhr.','','Gebucht'],
['30.10.','San Diego','La Jolla und letzte Einkäufe.','','Noch prüfen'],
['31.10.','San Diego → Düsseldorf','Mietwagenrückgabe 12:00 Uhr; KLM 640 um 15:05 Uhr. Ankunft DUS am 01.11. um 13:50 Uhr.','','Gebucht']];
const flights=[
['17.10.2026','KLM 1796','06:20','DUS','07:15','AMS','0:55 Std.','Economy (V), durchgeführt von German Airways GmbH'],
['17.10.2026','KLM 639','09:45','AMS','11:50','SAN','11:05 Std.','Umstieg 2:30 Std.; Gesamtdauer 14:30 Std.'],
['20.10.2026','Alaska 776','13:47','SFO','15:31','LAS','1:44 Std.','Saver, Buchungscode URXYCR'],
['31.10.2026','KLM 640','15:05','SAN','09:40 +1','AMS','10:35 Std.','Economy (V)'],
['01.11.2026','KLM 1801','13:05','AMS','13:50','DUS','0:45 Std.','Umstieg 3:25 Std.; Gesamtdauer 14:45 Std.']];
const stays=[
['Hotel','Best Western Yacht Harbor Hotel','San Diego','17.–18.10.2026','1 Nacht · 2 Erwachsene · 1 Kind · 1 Zimmer'],
['Hotel','Lombard Plaza Motel','San Francisco','19.–20.10.2026','1 Nacht · 2 Erwachsene · 1 Kind · 1 Zimmer'],
['Hotel','Excalibur Hotel & Casino','Las Vegas','20.–22.10.2026','2 Nächte'],
['Campingplatz','Mather Campground','Grand Canyon South Rim','25.–26.10.2026','1 Nacht'],
['Campingplatz','Watchman Campground','Zion National Park','27.–28.10.2026','1 Nacht']];
const bookings=[
['Hertz Z4 SUV','SAN → SFO · 17.–20.10.','L716E4B0027'],['Alaska Airlines 776','SFO → LAS · 20.10.','URXYCR'],['Cruise America C25','Henderson-Rundreise · 22.–29.10.',''],['Hertz RAM 2500 o. ä.','Henderson → SAN · 29.–31.10.','L699EDD44E4']];
const checks=['Reisepässe und ESTA prüfen','Online-Check-in Hinflug','Hertz-Fahrzeugzuweisung prüfen','Online-Check-in Alaska 776','Cruise-America-Abholzeit bestätigen','Reservierungsnummern ergänzen','Black-/Greywater leeren','Wohnmobil vor Rückgabe tanken','Online-Check-in Rückflug'];
function badge(s){return `<span class="badge ${s==='Noch prüfen'?'warn':''}">${s}</span>`}
function render(){planList.innerHTML=days.map(x=>`<article class="card searchable route"><div class="date">${x[0]}</div><h3>${x[1]}</h3><div class="meta">${x[2]}${x[3]?`<br><b>Übernachtung:</b> ${x[3]}`:''}</div>${badge(x[4])}</article>`).join('');flightList.innerHTML=flights.map(x=>`<article class="card searchable"><div class="date">${x[0]} · ${x[1]}</div><div class="flight-grid"><div><div class="time">${x[2]}</div><div class="airport">${x[3]}</div></div><div class="arrow">→</div><div style="text-align:right"><div class="time">${x[4]}</div><div class="airport">${x[5]}</div></div></div><div class="meta" style="margin-top:10px">${x[6]} · ${x[7]}</div></article>`).join('');stayList.innerHTML=stays.map(x=>`<article class="card searchable"><div class="date">${x[0]} · ${x[3]}</div><h3>${x[1]}</h3><div class="meta">${x[2]}<br>${x[4]}</div>${badge('Bestätigt')}</article>`).join('');bookingList.innerHTML=bookings.map(x=>`<article class="card searchable"><h3>${x[0]}</h3><div class="meta">${x[1]}${x[2]?`<br><b>Code:</b> ${x[2]}`:''}</div>${badge('Bestätigt')}</article>`).join('');checkList.innerHTML=checks.map((x,i)=>`<div class="card check searchable"><label><input type="checkbox" data-i="${i}"><span>${x}</span></label></div>`).join('');document.querySelectorAll('.check input').forEach(el=>{el.checked=localStorage.getItem('check'+el.dataset.i)==='1';el.onchange=()=>localStorage.setItem('check'+el.dataset.i,el.checked?'1':'0')})}
render();document.querySelectorAll('nav button').forEach(b=>b.onclick=()=>{document.querySelectorAll('nav button,.page').forEach(x=>x.classList.remove('active'));b.classList.add('active');document.getElementById(b.dataset.page).classList.add('active');search.value=''});search.oninput=()=>{const q=search.value.toLowerCase();document.querySelectorAll('.searchable').forEach(x=>x.classList.toggle('hidden',!x.textContent.toLowerCase().includes(q)))};if('serviceWorker'in navigator)navigator.serviceWorker.register('sw.js');
