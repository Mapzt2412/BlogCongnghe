import React, { useState } from 'react';
import "ka-table/style.css";
import { ITableProps, kaReducer, Table } from 'ka-table';
import { deleteRow, insertRow } from 'ka-table/actionCreators';
import { DataType, EditingMode, InsertRowPosition } from 'ka-table/enums';
import { DispatchFunc } from 'ka-table/types';
import { ICellTextProps } from 'ka-table/props';
import { Column } from 'ka-table/Models/Column';
import { Button } from 'react-bootstrap';

const InsertRowDemo: React.FC = (props) => {
  const dispatch: DispatchFunc = (action) => {
    changeTableProps((prevState: ITableProps) => kaReducer(prevState, action));
  };
  const dataArray = Array(parseInt(props.row)).fill(undefined).map(
    (_, index) => ({
      id: index,
    }),
  );
  
  let maxValue = Math.max(...dataArray.map(i => i.id));
  const generateNewId = () => {
    maxValue++;
    return maxValue;
  };
  let arr: Column[]=[{ key: ':delete', width: 40, style: { textAlign: 'center' } },
  {
    key: 'insertRowAfterColumn',
    width: 50
  }];
  for (let i = 0 ; i < props.arrName.length;i++){
    let type = props.arrType[i];
    arr.push({
      key: props.arrName[i],
      title: props.arrName[i],
      dataType: type
    })
  };
    const tablePropsInit: ITableProps = {
      
      columns: arr,
      editingMode: EditingMode.Cell,
      data: dataArray,
      rowKeyField: 'id',
    };

  const [tableProps, changeTableProps] = useState(tablePropsInit);
  return (
    <div className='add-row-demo'>
      <Table
        {...tableProps}
        childComponents={{
          cell: {
            content: (props) => {
              if (props.column.key === ':delete'){
                return (
                  
                  <Button variant='' onClick={() => dispatch(deleteRow(props.rowKeyValue))}
                  ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
                  <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"/>
                </svg></Button>
               );
              }
              if (props.column.key === 'insertRowAfterColumn'){
                return (
                  <Button variant='' onClick={() => {
                    const id = generateNewId();
                    const newRow = {
                      id,
                      column1: `column:1 rowId:${id}`,
                    };
                    dispatch(insertRow(newRow, { rowKeyValue: props.rowKeyValue, insertRowPosition: InsertRowPosition.after }))
                  }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-circle" viewBox="0 0 16 16">
                      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                      <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                    </svg>
                  </Button>
                );
              }
            }
          },
        }}
        dispatch={dispatch}
      />
    </div>
  );
};

export default InsertRowDemo;