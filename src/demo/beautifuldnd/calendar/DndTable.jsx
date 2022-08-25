import React, { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { Card } from "./Card";
import { v4 as uuidv4 } from 'uuid'
import {
  Text,
  Grid, 
  GridItem,
  Box,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react';

export const DndTable = () => {
  const [workCardWidth, setWorkCardWidth] = useState('');
  const [workCardHeight, setWorkCardHeight] = useState('');

  const datas = []
  const date = ["6/27(月)","6/28(火)"];
  date.map((day, index) => {
    datas[index] = 
      {
        id: uuidv4(),
        date: day,
        cols: []
      }
  })

  datas.map((col, index) => {
    for (let colnum = 0; colnum <= 1; colnum++) {
      datas[index]["cols"][colnum] = 
      {
          id: uuidv4(),
          car: `car${colnum}`,
          man: `man${colnum}`,
          tasks: [
          {
            id: uuidv4(),
            title: `job${colnum + 1}`
          },
          {
            id: uuidv4(),
            title: `job${colnum + 2}`
          },
          {
            id: uuidv4(),
            title: `job${colnum + 3}`
          }
        ]
      }
    }
  })
  const [data, setData] = useState(datas);

  const onDragEnd = (result) => {
    const {source, destination} = result;

    if(source.droppableId !== destination.droppableId) {
      // 別の日に付箋を移動＆並び替え
      // 移動する元の日付のindex、移動する付箋の配列を取得
      let sourceDateIndex;
      let sourceColIndex;
      let sourceCol;
      for(let i = 0; i <= data.length; i++) {
        if((data[i].cols.findIndex((e) => e.id === source.droppableId)) !== -1){
          sourceDateIndex = i;
          sourceColIndex = data[i].cols.findIndex((e) => e.id === source.droppableId);
          sourceCol = data[i].cols[sourceColIndex];
          break;
        }
      }
      // 移動先の日付のindex、付箋の配列を取得
      let destinationDateIndex;
      let destinationColIndex;
      let destinationCol;
      for(let i = 0; i <= data.length; i++) {
        if((data[i].cols.findIndex((e) => e.id === destination.droppableId)) !== -1){
          destinationDateIndex = i;
          destinationColIndex = data[i].cols.findIndex((e) => e.id === destination.droppableId);
          destinationCol = data[i].cols[destinationColIndex]
          break;
        }
      }
      // 付箋の配列コピー(コピーした配列で付箋の処理(削除と追加)を行う)
      const sourceTask = [...sourceCol.tasks];
      const destinationTask = [...destinationCol.tasks];
      // 並び替える付箋を配列から削除
      const [removed] = sourceTask.splice(source.index, 1);
      // // 動かした後のカラムにタスクを追加
      destinationTask.splice(destination.index, 0, removed);
      // // コピーした移動済みの配列を元の配列に代入
      data[sourceDateIndex].cols[sourceColIndex].tasks = sourceTask;
      data[destinationDateIndex].cols[destinationColIndex].tasks = destinationTask;
      setData(data);
      setWorkCardWidthHeight();
    } else {
      // 同じ日付内で付箋を移動＆並び替え
      // 移動する元の日付のindex、移動する付箋の配列を取得
      let sourceDateIndex;
      let sourceColIndex;
      let sourceCol;
      for(let i = 0; i <= data.length; i++) {
        if((data[i].cols.findIndex((e) => e.id === source.droppableId)) !== -1){
          sourceDateIndex = i;
          sourceColIndex = data[i].cols.findIndex((e) => e.id === source.droppableId);
          sourceCol = data[i].cols[sourceColIndex];
          break;
        }
      }
      // 付箋の配列コピー(コピーした配列で付箋の処理(削除と追加)を行う)
      const sourceTask = [...sourceCol.tasks]
      // 並び替える付箋を配列から削除
      const [removed] = sourceTask.splice(source.index, 1);
      // 並び替える付箋を配列に追加
      sourceTask.splice(destination.index, 0, removed);
      // コピーした配列(並び替え処理が完了した配列)を元の配列に代入
      data[sourceDateIndex].cols[sourceColIndex].tasks = sourceTask;
      setData(data);
      setWorkCardWidthHeight();
    }
  }
  const setWorkCardWidthHeight = () => {
    const workCards = document.getElementsByClassName('work-card');
    let clientWorkCardWidths = []
    let clientWorkCardHeights = []
    Array.from(workCards).map(function(card) {
      clientWorkCardWidths.push(card.clientWidth)
      setWorkCardWidth(Math.max(...clientWorkCardWidths))
      clientWorkCardHeights.push(card.clientHeight)
      setWorkCardHeight(Math.max(...clientWorkCardHeights))
    })
  }
  const getItemStyle = (isDragging, draggableStyle, kind) => ({
    ...draggableStyle,
    userSelect: "none",
    opacity: isDragging ? '0.7' : '1',
    height: isDragging ? '' : '',
    marginBottom: "5px",
  });

  // const hoge = (id) => {
  //   let cardElm = document.getElementById(id)
  //   let foo = cardElm && cardElm.clientHeight
  //   console.log(foo)
  //   setWorkCardHeight(foo)
  // }
  return (
    <>
    <TableContainer display="flex">
      <DragDropContext onDragEnd={onDragEnd}>
      {data.map((day, index) => 
        <Table w="20%" border='1px' borderColor='red'>
          <Thead>
            <Tr>
              <Th colspan="2">{day.date}</Th>
            </Tr>
          </Thead>
              <Tbody>
                <Tr>
                  {day.cols.map((col, index) => 
                  <>
                    <Td height="20px">{col.car}</Td>
                  </>
                  )}
                </Tr>
                <Tr>
                  {day.cols.map((col, index) => 
                  <>
                    <Td>{col.man}</Td>
                  </>
                  )}
                </Tr>
                <Tr>
                  {day.cols.map((col, index) => 
                  <Td p={4}>
                      <Droppable key={col.id} droppableId={col.id}>
                        {(provided, snapshot) => (
                          <div 
                          ref={provided.innerRef} 
                          {...provided.droppableProps} 
                          >
                            <Box 
                            minH={workCardHeight > 1 ? workCardHeight : "100%"}
                            minW={workCardWidth > 1 ? workCardWidth : "100%"}
                            w="100%" h="100%" 
                            p={2}
                            className="work-card"
                            border='1px' 
                            borderColor='black.200'
                            onDrag={snapshot.isDraggingOver ? console.log(this) : undefined}
                            // onDragOver={hoge(provided.droppableProps["data-rbd-droppable-id"])}
                            id={col.id}
                            >
                              {col.tasks.map((task, index) => (
                                <>
                                <Draggable key={task.id} draggableId={task.id} index={index}>
                                {(provided, snapshot) => (
                                    <div
                                      ref={provided.innerRef}
                                      {...provided.draggableProps}
                                      {...provided.dragHandleProps}
                                      style={getItemStyle(
                                        snapshot.isDragging,
                                        provided.draggableProps.style,
                                        task.kind
                                      )}
                                    >
                                    <Card>{task.title}<br/>aa<br/>aa</Card>
                                  </div>
                                )}
                                </Draggable>
                                </>
                              ))}
                              {provided.placeholder}
                            </Box>
                          </div>
                        )}
                      </Droppable>
                    </Td>
                  )}
                  </Tr>
              </Tbody>
        </Table>
      )}
      </DragDropContext>
    </TableContainer>
    </>
  )
}
