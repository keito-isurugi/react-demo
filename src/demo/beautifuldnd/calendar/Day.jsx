import React, { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { Card } from "./Card";
import { v4 as uuidv4 } from "uuid";
import { Text, Grid, GridItem, Box } from "@chakra-ui/react";

export const Day = () => {
  const datas = [];
  const date = ["6/27(月)", "6/28(火)"];
  date.map((day, index) => {
    datas[index] = {
      id: uuidv4(),
      date: day,
      mansId: uuidv4(),
      mans: [
        {
          id: uuidv4(),
          name: "yamada",
        },
        {
          id: uuidv4(),
          name: "suzuki",
        },
        {
          id: uuidv4(),
          name: "watanabe",
        },
      ],
      cols: [],
    };
  });

  datas.map((col, index) => {
    for (let colnum = 0; colnum <= 6; colnum++) {
      datas[index]["cols"][colnum] = {
        id: uuidv4(),
        car: `car${colnum}`,
        manId: uuidv4(),
        man: [
          {
            id: uuidv4(),
            name: "tanaka",
          },
        ],
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

    // 案件の並び替え、移動
    if (destination !== null) {
      if (source.droppableId !== destination.droppableId) {
        // 別の日に案件を移動＆並び替え
        // 移動する元の日付のindex、移動する案件の配列を取得
        let sourceDateIndex;
        let sourceWorksIndex;
        let sourceWorks;
        for (let i = 0; i < data.length; i++) {
          if (
            data[i].cols.findIndex((e) => e.id === source.droppableId) !== -1
          ) {
            sourceDateIndex = i;
            sourceWorksIndex = data[i].cols.findIndex(
              (e) => e.id === source.droppableId
            );
            sourceWorks = data[i].cols[sourceWorksIndex];
            break;
          }
        }
        // 移動先の日付のindex、案件の配列を取得
        let destinationDateIndex;
        let destinationWorksIndex;
        let destinationWorks;
        for (let i = 0; i < data.length; i++) {
          if (
            data[i].cols.findIndex((e) => e.id === destination.droppableId) !==
            -1
          ) {
            destinationDateIndex = i;
            destinationWorksIndex = data[i].cols.findIndex(
              (e) => e.id === destination.droppableId
            );
            destinationWorks = data[i].cols[destinationWorksIndex];
            break;
          }
        }
        if (sourceWorks !== undefined) {
          // 案件の配列コピー(コピーした配列で案件の処理(削除と追加)を行う)
          const sourceTask = [...sourceWorks.tasks];
          const destinationTask = [...destinationWorks.tasks];
          // 並び替える案件を配列から削除
          const [removed] = sourceTask.splice(source.index, 1);
          // // 動かした後のカラムにタスクを追加
          destinationTask.splice(destination.index, 0, removed);
          // // コピーした移動済みの配列を元の配列に代入
          data[sourceDateIndex].cols[sourceWorksIndex].tasks = sourceTask;
          data[destinationDateIndex].cols[destinationWorksIndex].tasks =
            destinationTask;
          setData(data);
        }
      } else {
        let sourceDateIndex;
        let sourceWorksIndex;
        let sourceWorks;
        for (let i = 0; i < data.length; i++) {
          if (
            data[i].cols.findIndex((e) => e.id === source.droppableId) !== -1
          ) {
            sourceDateIndex = i;
            sourceWorksIndex = data[i].cols.findIndex(
              (e) => e.id === source.droppableId
            );
            sourceWorks = data[i].cols[sourceWorksIndex];
            console.log(sourceWorks);
            break;
          }
        }
        // 案件の配列コピー(コピーした配列で案件の処理(削除と追加)を行う)
        const sourceTask = [...sourceWorks.tasks];
        // 並び替える案件を配列から削除
        const [removed] = sourceTask.splice(source.index, 1);
        // 並び替える案件を配列に追加
        sourceTask.splice(destination.index, 0, removed);
        // コピーした配列(並び替え処理が完了した配列)を元の配列に代入
        data[sourceDateIndex].cols[sourceWorksIndex].tasks = sourceTask;
        setData(data);
      }
    }

    // スタッフ移動
    if (destination !== null) {
      // リスト→カラム
      // 移動元
      const sourceDateStaffsIndex = data.findIndex(
        (e) => e.mansId === source.droppableId
      );
      const sourceStaffsIndex = data[sourceDateStaffsIndex];

      let destinationDateManIndex;
      let destinationStaffsIndex;
      let destinationStaffs;
      let destinationDate;
      // 移動先
      for (let i = 0; i < data.length; i++) {
        if (
          data[i].cols.findIndex((e) => e.manId === destination.droppableId) !==
          -1
        ) {
          // 移動先の配列の親配列番号取得
          destinationDateManIndex = i;
          // 移動先の配列の親配列を取得
          destinationStaffsIndex = data[i].cols.findIndex(
            (e) => e.manId === destination.droppableId
          );
          // 移動先の配列を取得
          destinationStaffs = data[i].cols[destinationStaffsIndex];
          destinationDate = data[i];
          break;
        }
      }

      if (sourceStaffsIndex !== undefined) {
        // 同じ日付内のみ移動可能
        if (sourceStaffsIndex.id === destinationDate.id) {
          // 案件の配列コピー(コピーした配列で案件の処理(削除と追加)を行う)
          const sourceStaff = [...sourceStaffsIndex.mans];
          const destinationStaff = [...destinationStaffs.man];
          // // 並び替える案件を配列から削除
          const [removed] = sourceStaff.splice(source.index, 1);
          // 並び替える案件を配列に追加
          destinationStaff.splice(destination.index, 0, removed);
          // // コピーした配列(並び替え処理が完了した配列)を元の配列に代入
          data[sourceDateStaffsIndex].mans = sourceStaff;
          data[destinationDateManIndex].cols[destinationStaffsIndex].man =
            destinationStaff;
          setData(data);
        }
      }

      // カラム→リスト、カラム→カラム
      let sourceDateIndex;
      let sourceStaffIndex;
      let sourceStaff;
      for (let i = 0; i <= data.length; i++) {
        if (
          data[i].cols.findIndex((e) => e.manId === source.droppableId) !== -1
        ) {
          sourceDateIndex = i;
          sourceStaffIndex = data[i].cols.findIndex(
            (e) => e.manId === source.droppableId
          );
          sourceStaff = data[i].cols[sourceStaffIndex];
          break;
        }
      }

      if (destinationDate !== undefined) {
        if (data[sourceDateIndex].id === destinationDate.id) {
          const sourceStaffCp = [...sourceStaff.man];
          const [removed] = sourceStaffCp.splice(source.index, 1);

          // カラム→カラム
          // 移動先の日付のindex、案件の配列を取得
          let destinationStaffDateIndex;
          let destinationStaffColIndex;
          let destinationStaffCol;

          for (let i = 0; i <= data.length; i++) {
            if (
              data[i].cols.findIndex(
                (e) => e.manId === destination.droppableId
              ) !== -1
            ) {
              destinationStaffDateIndex = i;
              destinationStaffColIndex = data[i].cols.findIndex(
                (e) => e.manId === destination.droppableId
              );
              destinationStaffCol = data[i].cols[destinationStaffColIndex];
              break;
            }
          }
          const destinationTask = [...destinationStaffCol.man];
          // // 動かした後のカラムにタスクを追加
          destinationTask.splice(destination.index, 0, removed);
          // // コピーした移動済みの配列を元の配列に代入
          data[sourceDateIndex].cols[sourceStaffIndex].man = sourceStaffCp;
          data[destinationStaffDateIndex].cols[destinationStaffColIndex].man =
            destinationTask;
          setData(data);
        }
      } else {
        // カラム→リスト
        const destinationStaffsDateIndex = data.findIndex(
          (e) => e.mansId === destination.droppableId
        );
        const destinationStaffsDate = data[destinationStaffsDateIndex];
        if (data[sourceDateIndex].id === destinationStaffsDate.id) {
          const sourceStaffCp = [...sourceStaff.man];
          const [removed] = sourceStaffCp.splice(source.index, 1);
          // 移動先の日付のindex、案件の配列を取得
          const destinationDateIndex = data.findIndex(
            (e) => e.mansId === destination.droppableId
          );
          if (data[destinationDateIndex] !== undefined) {
            const destinationStaffsList = data[destinationDateIndex];
            const destinationStaffsCp = [...destinationStaffsList.mans];
            destinationStaffsCp.splice(destination.index, 0, removed);
            data[destinationDateIndex].cols[sourceStaffIndex].man =
              sourceStaffCp;
            data[destinationDateIndex].mans = destinationStaffsCp;
            setData(data);
          }
        }
      }
    }
  };

  return (
    <>
      <Text fontSize="3xl" fontWeight={"bold"}>
        直近工事予定
      </Text>
      <DragDropContext onDragEnd={onDragEnd}>
        <Box display="flex" w="100%" textAlign="center">
          {data.map((day, index) => (
            <Grid
              templateRows="repeat(1, 1fr)"
              templateColumns="repeat(9, 1fr)"
              h="100%"
              w={"100%"}
              border="1px"
              borderColor="red"
              key={day.id}
            >
              <GridItem
                rowSpan={1}
                colSpan={1}
                border="1px"
                borderColor="green"
              >
                <Box border="1px" borderColor="black.200" h={"100px"}>
                  {day.date}
                </Box>
                <Droppable droppableId={day.mansId} type="STAFFS">
                  {(provided) => (
                    <div ref={provided.innerRef} {...provided.droppableProps}>
                      {day.mans.map((man, index) => (
                        <Box key={man.id}>
                          <Draggable draggableId={man.id} index={index}>
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
                                <Card>{man.name}</Card>
                              </div>
                            )}
                          </Draggable>
                          {provided.placeholder}
                        </Box>
                      ))}
                    </div>
                  )}
                </Droppable>
              </GridItem>
              {day.cols.map((col, index) => (
                <GridItem border="1px" borderColor="black.200" key={col.id}>
                  <Box h={"30px"}>{col.car}</Box>

                  <Droppable
                    key={col.manId}
                    droppableId={col.manId}
                    type="STAFFS"
                  >
                    {(provided) => (
                      <div ref={provided.innerRef} {...provided.droppableProps}>
                        <Box h={"70px"}>
                          {col.man.map((m, index) => (
                            <Draggable
                              key={m.id}
                              draggableId={m.id}
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
                                  <Card>{m.name}</Card>
                                </div>
                              )}
                            </Draggable>
                          ))}
                          {provided.placeholder}
                        </Box>
                      </div>
                    )}
                  </Droppable>

                  <Droppable key={col.id} droppableId={col.id} type="WORKS">
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
              <GridItem
                rowSpan={1}
                colSpan={1}
                border="1px"
                borderColor="green"
              >
                <Box border="1px" borderColor="black.200" h={"100px"}>
                  空白
                </Box>
              </GridItem>
            </Grid>
          ))}
        </Box>
      </DragDropContext>
    </>
  );
};
