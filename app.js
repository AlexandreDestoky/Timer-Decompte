let decompte = document.querySelector(".timer");
// decompte.innerText = `${jours}j ${heures}h ${minutes}m ${secondes}s`;

let timer = setInterval(()=> {
  let now = Date.now();
  let dateSortie = new Date("nov 17, 2020 19:00:00").getTime();

  let attente = dateSortie - now;
  if(attente > 0) {
    let jours = Math.floor(attente / (1000 * 60 * 60 * 24));
    let heures = Math.floor((attente % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
    let minutes = Math.floor((attente % (60 * 60 * 1000)) / (60 * 1000));
    let secondes = Math.floor((attente % (60 * 1000)) / 1000);
    decompte.innerText = `${jours}J ${heures}H ${minutes}M ${secondes}S`;
  }else {
    decompte.innerText = `L'extension est sortie !`;
  }
},1000);