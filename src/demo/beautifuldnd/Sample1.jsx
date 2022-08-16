import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

// ドラッグ&ドロップした要素を入れ替える
const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

// ドラッグ&ドロップリストのスタイル(通常:白、移動中:aqua)
const getItemStyle = (isDragging, draggableStyle) => ({
  background: isDragging ? "aqua" : "white",
  fontSize: "20px",
  color: "red",
  ...draggableStyle
});

// ドラッグ&ドロップの外枠と配置先のスタイル(通常:黒、移動中:緑)
const getListStyle = (isDraggingOver) => ({
  background: isDraggingOver ? "green" : "black",
  padding: "10px"
});

export const Sample1 = () => {

  // 表示するリストの配列
  const [questions, setQuestions] = useState([
    { id: 1, title: "question1" },
    { id: 2, title: "question2" },
    { id: 3, title: "question3" },
    { id: 4, title: "question4" },
    { id: 5, title: "question5" },
    { id: 6, title: "question6" },
  ]);

  // ドラッグ終了時の処理
  const onDragEnd = (result) => {
    console.log(result)
    // ドロップ先がない
    if (!result.destination) {
      return;
    }
    // 配列の順序を入れ替える
    let movedItems = reorder(
      questions, //　順序を入れ変えたい配列
      result.source.index, // 元の配列の位置
      result.destination.index // 移動先の配列の位置
    );
    setQuestions(movedItems);
  };

  return (
    // ドラッグアンドドロップの有効範囲
    <DragDropContext onDragEnd={onDragEnd}>
      {/* ドロップできる範囲 */}
      <Droppable droppableId="droppable">
        {(provided, snapshot) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            style={getListStyle(snapshot.isDraggingOver)}
          >
            {/*　ドラッグできる要素　*/}
            {questions.map((question, index) => (
              <Draggable
                key={question.id}
                draggableId={"q-" + question.id}
                index={index}
              >
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    style={getItemStyle(
                      snapshot.isDragging,
                      provided.draggableProps.style
                    )}
                  >
                    {question.title}
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};
