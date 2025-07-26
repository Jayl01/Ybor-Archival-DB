usage: ExcelDataToJson [-h] [-o O] [--sheet | --no-sheet] filename

Converts excel into json. Must have each sheet start with "Accession # Title Location Subject Headings
Description Date Created By Size Condition Status Donated By Acquisition Attachment Notes" The name of the
sheets is used.

positional arguments:
  filename             The path of the excel file

options:
  -h, --help           show this help message and exit
  -o O                 The filepath of the output, must have .json
  --sheet, --no-sheet  When true (default), the artifacts will be divided by their corresponding sheet
