function doGet() {
  return HtmlService.createHtmlOutputFromFile("page");
}

function getScriptURL() {
  return ScriptApp.getService().getUrl();
}

function setReserva(dadosReserva) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const dados = ss.getSheetByName("Dados");
  const ultimaLinha = dados.getLastRow() + 1;
  const formularioDaReserva = [
        dadosReserva["Data Reserva"],
    dadosReserva["Quem Indicou"],
    dadosReserva["Nome Completo"].toUpperCase(),
    dadosReserva["Unidade"].toUpperCase(),
    dadosReserva["Check In"].toUpperCase(),
    dadosReserva["Check Out"].toUpperCase(),
    dadosReserva["Adultos"],
    dadosReserva["Crianças"],
    dadosReserva["Valor Total"],
    dadosReserva["Valor Recebido"],
    dadosReserva["Observaçao"].toUpperCase(),
  ];
  console.log(formularioDaReserva);
  dados.getRange(`B${ultimaLinha.toString()}:L${ultimaLinha.toString()}`).setValues([formularioDaReserva]);
  Logger.log(dados);
  return dados;
}

// function getCodigoReserva() {
//   const spreadSheet = SpreadsheetApp.getActiveSpreadsheet();
//   const dados = spreadSheet.getSheetByName("Dados");
//   const ultimaLinha = dados.getLastRow();
//   const codigoReserva = dados.getRange(ultimaLinha, 1).getValue();
 
//   return codigoReserva;
// }

function getCodigoReserva() {
  const spreadSheet = SpreadsheetApp.getActiveSpreadsheet();
  const dados = spreadSheet.getSheetByName("Dados");
  const ultimaLinha = dados.getLastRow();
  const codigoReserva = dados.getRange(ultimaLinha, 1,1,13).getDisplayValues();

  // console.log({ valorDaCelula });
  // Logger.log({ valorDaCelula });

  Logger.log(codigoReserva);
  return codigoReserva;
}


function apagarReserva(){
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Dados');
  const ultimaLinha1 = sheet.getLastRow();
  const reservaAgendada = sheet.getRange(`B${ultimaLinha1.toString()}:L${ultimaLinha1.toString()}`).clearContent();
  Logger.log(reservaAgendada);
}
