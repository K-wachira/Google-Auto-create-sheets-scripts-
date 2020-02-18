// function gets sheets name( tabs ) and renames a cell to it
function sheetName() {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    return ss.getActiveSheet().getName();
  }
  