import { useState } from "react";

export const ShowData = (props) => {
  const { data } = props;

  return (
    <>
      <div>
        {data &&
          data.map((photo) => (
            <div key={photo.id}>
              id:{photo.id},name:{photo.title}
            </div>
          ))}
      </div>
    </>
  );
};
