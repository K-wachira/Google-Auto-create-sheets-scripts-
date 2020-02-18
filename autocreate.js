function CreateSheets() {
    var spreadsheet = SpreadsheetApp.getActive();
    var sheet = spreadsheet.getActiveSheet();
    var range = sheet.getActiveRange();
    var numRows = range.getNumRows();
    for (var i = 0; i < numRows; i++) {
      var sourcetoread = spreadsheet.getSheetByName('[insert the name of tabs sheet you want to copy data from]');
      sourcetoread.copyTo(spreadsheet);
      var RenameSheet = "Copy of Template"; 
      var RenameThis = spreadsheet.getSheetByName(RenameSheet);
      var StudentName = range.getValues()[i][0]
      RenameThis.setName(StudentName) //sets the name of the new sheet to what ever name you choose 
      var file = SpreadsheetApp.create('[what you want the new googlesheet name to be ')
      SpreadsheetApp.getActive().getSheetByName('Template').copyTo(file)
      var firstpage = file.getSheetByName(RenameSheet)
      file.deleteSheet(file.getSheetByName('Sheet1'))
      var firstcell = firstpage.getRange('A1')
      var cellData = '=IMPORTRANGE("[insert master sheets link here]", "'+range.getValues()[i][0] +'!A1:Q50")'; //edited this to !3:10 to get the reference to work
      file.getSheetByName(RenameSheet).setName('Individual Grades')
      firstpage.getRange('2:50').activate();
      firstpage.getActiveRangeList().clear({contentsOnly: true, skipFilteredRows: true}); // This deletes all the content in Rows 3 to 10 keeping the formatting
      firstcell.setValue(cellData); // I just moved this here - I think your case is a bit different so it's easier to just do it after.
      file.addViewer(range.getValues()[i][1])
      spreadsheet.setActiveSheet(spreadsheet.getSheetByName(StudentName), true);
      spreadsheet.getActiveSheet().insertColumnsBefore(spreadsheet.getActiveRange().getColumn(), 1);
      spreadsheet.getActiveRange().offset(0, 0, spreadsheet.getActiveRange().getNumRows(), 1).activate();
      spreadsheet.getActiveSheet().deleteColumns(spreadsheet.getActiveRange().getColumn(), spreadsheet.getActiveRange().getNumColumns());
     
    }
    
  };
  
