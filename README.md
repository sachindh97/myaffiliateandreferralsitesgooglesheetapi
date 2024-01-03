
# Appscript method 

function doGet() {
  var doc = SpreadsheetApp.getActiveSpreadsheet()
  var sheet = doc.getSheetByName('enter_your_sheet_name');
  var values = sheet.getDataRange().getValues();

  var output = [];
  for (var i = 0; i < values.length; i++) {
    var row = {};
    row['srno'] = values[i][0];
    row['site_name'] = values[i][1];
    row['site_description'] = values[i][2];
    row['site_url'] = values[i][3];
    row['site_categories'] = values[i][4];
    row['type'] = values[i][5];
    output.push(row);
  }
  return ContentService.createTextOutput(JSON.stringify({ data: output })).setMimeType(ContentService.MimeType.JSON);

}


# Myaffiliatereferralsites

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.10.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
