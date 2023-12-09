var tableData = [];

    function createTable() {
      var table = document.getElementById("myTable");
      var columnsInput = document.getElementById("columns");
      var rowsInput = document.getElementById("rows");
      var columns = parseInt(columnsInput.value);
      var rows = parseInt(rowsInput.value);

      while (table.firstChild) {
        table.removeChild(table.firstChild);
      }

      var headerRow = document.createElement("tr");
      for (var i = 0; i < columns; i++) {
        var th = document.createElement("th");
        var input = document.createElement("input");
        input.setAttribute("type", "text");
        input.setAttribute("class", "header-input");
        input.setAttribute("placeholder", "Column " + (i + 1));
        th.appendChild(input);
        headerRow.appendChild(th);
      }
      table.appendChild(headerRow);

      for (var i = 0; i < rows; i++) {
        var rowData = [];
        var row = document.createElement("tr");
        for (var j = 0; j < columns; j++) {
          var cell = document.createElement("td");
          cell.setAttribute("contenteditable", "true");
          cell.setAttribute("class", "editable-cell");
          cell.addEventListener("input", updateCell);
          rowData.push("");
          row.appendChild(cell);
        }
        table.appendChild(row);
        tableData.push(rowData);
      }
    }

    function updateCell(event) {
      var rowIndex = event.target.parentNode.rowIndex - 1;
      var columnIndex = event.target.cellIndex;
      var value = event.target.textContent.trim();
      updateData(rowIndex, columnIndex, value);
    }

    function updateData(row, col, value) {
      tableData[row][col] = value;
    }

    function deleteRow(row) {
      var table = document.getElementById("myTable");
      table.deleteRow(row);
      tableData.splice(row, 1);
    }

    function updateRow(row) {
      var table = document.getElementById("myTable");
      var rowData = tableData[row];
      var cells = table.rows[row + 1].cells;
      for (var i = 0; i < rowData.length; i++) {
        var value = cells[i].textContent.trim();
        rowData[i] = value;
      }
    }

    function displayData() {
      console.log(tableData);
    }