import React, { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { dummyData } from "./dummyData";
import { Card } from "./Card";

export const Main = () => {
  const [data, setData] = useState(dummyData);

  const onDragEnd = (result) => {
    const { source, destination } = result;

    // 別のカラムにタスク移動
    if (source.droppableId !== destination.droppableId) {
      // 同じカラム内でのタスクの入れ替え
      const sourceColIndex = data.findIndex((e) => e.id === source.droppableId);
      const destinationColIndex = data.findIndex(
        (e) => e.id === destination.droppableId
      );
      const sourceCol = data[sourceColIndex];
      const destinationCol = data[destinationColIndex];
      // タスクの配列コピー、こちらでタスク移動の処理(削除と追加)を行う
      const sourceTask = [...sourceCol.tasks];
      const destinationTask = [...destinationCol.tasks];
      // 動かし始めたタスクの削除
      const [removed] = sourceTask.splice(source.index, 1);
      // 動かした後のカラムにタスクを追加
      destinationTask.splice(destination.index, 0, removed);
      // コピーした移動済みの配列を元の配列に代入
      data[sourceColIndex].tasks = sourceTask;
      data[destinationColIndex].tasks = destinationTask;
      setData(data);
    } else {
      // 同じカラム内でのタスクの入れ替え
      const sourceColIndex = data.findIndex((e) => e.id === source.droppableId);
      const sourceCol = data[sourceColIndex];
      // タスクの配列コピー、こちらでタスク移動の処理(削除と追加)を行う
      const sourceTask = [...sourceCol.tasks];
      // タスクの削除
      const [removed] = sourceTask.splice(source.index, 1);
      // タスクの追加
      sourceTask.splice(destination.index, 0, removed);
      // コピーした移動済みの配列を元の配列に代入
      data[sourceColIndex].tasks = sourceTask;
      setData(data);
    }
  };

  return (
    <>
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="trello">
          {data.map((section) => (
            <Droppable key={section.id} droppableId={section.id}>
              {(provided) => (
                <div
                  className="trello-section"
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                >
                  <div className="trello-section-title">{section.title}</div>
                  <div className="trello-section-content">
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
                  </div>
                </div>
              )}
            </Droppable>
          ))}
        </div>
      </DragDropContext>
    </>
  );
};
