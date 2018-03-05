
function doGet(e) {
  return HtmlService.createHtmlOutputFromFile('form.html');
}

function uploadFiles(form) {
  
  try {
    
    var dropbox = "Student Files";
    var folder, folders = DriveApp.getFoldersByName(dropbox);
    
    if (folders.hasNext()) {
      folder = folders.next();
    } else {
      folder = DriveApp.createFolder(dropbox);
    }
    
    var blob = form.myFile;    
    var file = folder.createFile(blob);    
    file.setDescription(form.description);
    file.setName(form.myName + " - " + form.problem);
        
    return "File uploaded successfully " + file.getUrl();
    
  } catch (error) {
    
    return error.toString();
  }
  
}