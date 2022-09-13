import React, { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { Card } from "./Card";
import { v4 as uuidv4 } from "uuid";
import { Text, Grid, GridItem, Box } from "@chakra-ui/react";

export const Month = () => {
  const datas = [];
  const date = [...Array(31).keys()];
  date.forEach((day) => {
    datas.push({
      id: uuidv4(),
      date: day,
      tasks: [
        {
          id: uuidv4(),
          title: "Hoge",
        },
        {
          id: uuidv4(),
          title: "Foo",
        },
        {
          id: uuidv4(),
          title: "Buzz",
        },
      ],
    });
  });

  const [data, setData] = useState(datas);

  const onDragEnd = (result) => {
    const { source, destination } = result;

    if (source.droppableId !== destination.droppableId) {
      // 別の日に付箋を移動＆並び替え
      // 移動する元の日付のindex、移動する付箋の配列を取得
      const sourceColIndex = data.findIndex((e) => e.id === source.droppableId);
      const sourceCol = data[sourceColIndex];
      // // 移動先の日付のindex、付箋の配列を取得
      const destinationColIndex = data.findIndex(
        (e) => e.id === destination.droppableId
      );
      const destinationCol = data[destinationColIndex];
      // // 付箋の配列コピー(コピーした配列で付箋の処理(削除と追加)を行う)

      console.log([...destinationCol.tasks]);
      const sourceTask = [...sourceCol.tasks];
      const destinationTask = [...destinationCol.tasks];
      console.log(destinationTask);

      // // 並び替える付箋を配列から削除
      const [removed] = sourceTask.splice(source.index, 1);
      // // // 動かした後のカラムにタスクを追加
      destinationTask.splice(destination.index, 0, removed);
      // // // コピーした移動済みの配列を元の配列に代入
      data[sourceColIndex].tasks = sourceTask;
      data[destinationColIndex].tasks = destinationTask;
      setData(data);
    } else {
      // 同じ日付内で付箋の並び替え
      // 移動する付箋のindexと配列を取得
      const sourceColIndex = data.findIndex((e) => e.id === source.droppableId);
      const sourceCol = data[sourceColIndex];
      // 付箋の配列コピー(コピーした配列で付箋の処理(削除と追加)を行う)
      const sourceTask = [...sourceCol.tasks];
      // 並び替える付箋を配列から削除
      const [removed] = sourceTask.splice(source.index, 1);
      // 並び替える付箋を配列に追加
      sourceTask.splice(destination.index, 0, removed);
      // コピーした配列(並び替え処理が完了した配列)を元の配列に代入
      data[sourceColIndex].tasks = sourceTask;
      setData(data);
    }
  };

  return (
    <>
      <Text fontSize="3xl" fontWeight={"bold"}>
        月間工事予定
      </Text>
      <DragDropContext onDragEnd={onDragEnd}>
        <Box border="1px" borderColor="black.200" pt={6} pb={6}>
          <Text fontSize="xl" fontWeight={"bold"} p={[0, 0, 3, 2]}>
            2022年6月
          </Text>
          <Grid templateRows="repeat(2, 2fr)" templateColumns="repeat(16, 2fr)">
            {data.map((section) => (
              <GridItem border="1px" borderColor="black.200" key={section.id}>
                <Box border="1px" borderColor="black.200">
                  {section.date + 1}
                </Box>
                <Droppable key={section.id} droppableId={section.id}>
                  {(provided) => (
                    <div ref={provided.innerRef} {...provided.droppableProps}>
                      <Box h={"200px"}>
                        {section.tasks.map((task, index) => (
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
        </Box>
      </DragDropContext>
    </>
  );
};
