import React from "react";
import { RecompCheckbox } from "../../../index";
import "./Table.css";
import PropTypes from "prop-types";
import {
  Cell,
  Column,
  Row,
  Table,
  TableBody,
  TableHeader,
} from "react-aria-components";

function RecompTable({ columns, rows }) {
  return (
    <div>
      <Table aria-label="Files" selectionMode="multiple">
        <TableHeader>
          <Column>
            <RecompCheckbox slot="selection" />
          </Column>
          {columns &&
            columns.map((col, index) => (
              <Column key={index} isRowHeader={index === 0}>
                {col}
              </Column>
            ))}
        </TableHeader>
        <TableBody>
          {rows &&
            rows.map((row, index) => (
              <Row key={index}>
                <Cell>
                  <RecompCheckbox slot="selection" />
                </Cell>
                {columns.map((col, colIndex) => (
                  <Cell key={colIndex} isRowHeader={colIndex === 0}>
                    {row[col]}
                  </Cell>
                ))}
              </Row>
            ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default RecompTable;

RecompTable.propTypes = {
  columns: PropTypes.array.isRequired,
  rows: PropTypes.arrayOf(PropTypes.object).isRequired,
};
