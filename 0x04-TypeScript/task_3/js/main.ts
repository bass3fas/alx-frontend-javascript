/// <reference path ="./crud.d.ts" />
import { RowId, RowElement } from "./interface";
import * as CRUD from "./crud";

const row: RowElement = {
    firstName: "Guillaume",
    lastName: "Salva"
}

const newRowId: RowId = CRUD.insertRow(row);
const updatedRow: RowElement = { age: 23, ...row };

CRUD.updateRow(newRowId, updatedRow);
CRUD.deleteRow(newRowId);


