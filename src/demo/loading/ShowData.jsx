import { useState } from "react";

export const ShowData = (props) => {
  const { data } = props;

  return (
    <>
      <div>
        {data &&
          data.map((data) => (
            <div key={data.id}>
              id:{data.id},name:{data.title}
            </div>
          ))}
      </div>
    </>
  );
};
