function pegarValorDoInput() {
  // Obter o valor do input
  var valorInput = document.getElementById('evento').value;

  // Exibir o valor no console (pode ser usado de várias maneiras dependendo do que você deseja fazer)
  console.log("Valor do input:", valorInput);
}


document.addEventListener('DOMContentLoaded', function() {
  var calendarEl = document.getElementById('calendar');

  fetch('events.json')
    .then(response => response.json())
    .then(events => {
      var calendar = new FullCalendar.Calendar(calendarEl, {
              initialView: 'dayGridMonth',
      initialDate: '2023-09-07',
      headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay'  
      },
      
      
      locale: 'pt-br',
        events: events
      });
      

      calendar.render();
    })
    .catch(error => console.error('Erro ao carregar eventos:', error));
});