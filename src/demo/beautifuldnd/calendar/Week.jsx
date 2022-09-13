import React, { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { Card } from "./Card";
import { v4 as uuidv4 } from "uuid";
import { Text, Grid, GridItem, Box } from "@chakra-ui/react";

export const Week = () => {
  const datas = [];
  const date = ["6/27(月)", "6/28(火)"];
  // const date = ["6/27(月)"];
  date.map((day, index) => {
    datas[index] = {
      id: uuidv4(),
      date: day,
      cols: [],
    };
  });

  datas.map((col, index) => {
    for (let colnum = 0; colnum <= 6; colnum++) {
      datas[index]["cols"][colnum] = {
        id: uuidv4(),
        car: `car${colnum}`,
        man: `man${colnum}`,
        tasks: [
          {
            id: uuidv4(),
            title: `job${colnum + 1}`,
          },
          {
            id: uuidv4(),
            title: `job${colnum + 2}`,
          },
          {
            id: uuidv4(),
            title: `job${colnum + 3}`,
          },
        ],
      };
    }
  });
  const [data, setData] = useState(datas);

  const onDragEnd = (result) => {
    const { source, destination } = result;

    if (source.droppableId !== destination.droppableId) {
      // 別の日に付箋を移動＆並び替え
      // 移動する元の日付のindex、移動する付箋の配列を取得
      let sourceDateIndex;
      let sourceColIndex;
      let sourceCol;
      for (let i = 0; i <= data.length; i++) {
        if (data[i].cols.findIndex((e) => e.id === source.droppableId) !== -1) {
          sourceDateIndex = i;
          sourceColIndex = data[i].cols.findIndex(
            (e) => e.id === source.droppableId
          );
          sourceCol = data[i].cols[sourceColIndex];
          break;
        }
      }
      // 移動先の日付のindex、付箋の配列を取得
      let destinationDateIndex;
      let destinationColIndex;
      let destinationCol;
      for (let i = 0; i <= data.length; i++) {
        if (
          data[i].cols.findIndex((e) => e.id === destination.droppableId) !== -1
        ) {
          destinationDateIndex = i;
          destinationColIndex = data[i].cols.findIndex(
            (e) => e.id === destination.droppableId
          );
          destinationCol = data[i].cols[destinationColIndex];
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
      data[destinationDateIndex].cols[destinationColIndex].tasks =
        destinationTask;
      setData(data);
    } else {
      // 同じ日付内で付箋を移動＆並び替え
      // 移動する元の日付のindex、移動する付箋の配列を取得
      let sourceDateIndex;
      let sourceColIndex;
      let sourceCol;
      for (let i = 0; i <= data.length; i++) {
        if (data[i].cols.findIndex((e) => e.id === source.droppableId) !== -1) {
          sourceDateIndex = i;
          sourceColIndex = data[i].cols.findIndex(
            (e) => e.id === source.droppableId
          );
          sourceCol = data[i].cols[sourceColIndex];
          break;
        }
      }
      // 付箋の配列コピー(コピーした配列で付箋の処理(削除と追加)を行う)
      const sourceTask = [...sourceCol.tasks];
      // 並び替える付箋を配列から削除
      const [removed] = sourceTask.splice(source.index, 1);
      // 並び替える付箋を配列に追加
      sourceTask.splice(destination.index, 0, removed);
      // コピーした配列(並び替え処理が完了した配列)を元の配列に代入
      data[sourceDateIndex].cols[sourceColIndex].tasks = sourceTask;
      setData(data);
    }
  };

  return (
    <>
      <Text fontSize="3xl" fontWeight={"bold"}>
        週間工事予定
      </Text>
      <DragDropContext onDragEnd={onDragEnd}>
        <Text fontSize="xl" fontWeight={"bold"} p={[0, 0, 3, 2]}>
          2022年6月
        </Text>
        <Box display="flex" w="100%" textAlign="center">
          {data.map((day, index) => (
            <Grid
              templateRows="repeat(1, 1fr)"
              templateColumns="repeat(7, 1fr)"
              h="100%"
              w={"50%"}
              border="1px"
              borderColor="red"
              key={day.id}
            >
              <GridItem
                rowSpan={1}
                colSpan={7}
                border="1px"
                borderColor="green"
              >
                {day.date}
              </GridItem>
              {day.cols.map((col, index) => (
                <GridItem border="1px" borderColor="black.200" key={col.id}>
                  <Box border="1px" borderColor="black.200">
                    {col.car}
                  </Box>
                  <Box border="1px" borderColor="black.200">
                    {col.man}
                  </Box>
                  <Droppable key={col.id} droppableId={col.id}>
                    {(provided) => (
                      <div ref={provided.innerRef} {...provided.droppableProps}>
                        <Box border="1px" borderColor="black.200" minH={500}>
                          {col.tasks.map((task, index) => (
                            <Draggable
                              key={task.id}
                              draggableId={task.id}
                              index={index}
                            >
                              {(provided, snapshot) => (
                                <div
                                  ref={provided.innerRef}
                                  {...provided.draggableProps}
                                  {...provided.dragHandleProps}
                                  style={{
                                    ...provided.draggableProps.style,
                                    opacity: snapshot.isDragging ? "0.5" : "1",
                                  }}
                                >
                                  <Card>{task.title}</Card>
                                </div>
                              )}
                            </Draggable>
                          ))}
                          {provided.placeholder}
                        </Box>
                      </div>
                    )}
                  </Droppable>
                </GridItem>
              ))}
            </Grid>
          ))}
        </Box>
      </DragDropContext>
    </>
  );
};
