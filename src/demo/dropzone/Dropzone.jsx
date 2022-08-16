import { useCallback, useMemo } from 'react';
import { useDropzone } from 'react-dropzone';
import {
  Button,

} from '@chakra-ui/react';


export const Dropzone = () => {
  const onDrop = useCallback((acceptedFiles) => {
    // Do something with the files
    console.log('acceptedFiles:', acceptedFiles);
  }, []);
  
  const { getRootProps, getInputProps, isDragActive, open, acceptedFiles } = useDropzone({ onDrop, noClick: true });
  
  const baseStyle = {
    display: "flex",
    flexDirection: "column",
    width: 200,
    height: 150,
  };
  const borderNormalStyle = {
    border: "1px dotted #888"
  };
  const borderDragStyle = {
    border: "1px solid #00f",
    transition: 'border .5s ease-in-out'
  };
  const style = useMemo(() => (
    { ...baseStyle, ...(isDragActive ? borderDragStyle : borderNormalStyle)}
  ), [isDragActive]);

  const files = useMemo(() => 
  acceptedFiles.map((file, index) => (
      <li key={index}>
        {file.path} - {file.size} bytes
      </li>
    )
  ), [acceptedFiles]);

  return (
    <div className="container">
      <div {...getRootProps({ style })}>
        <input {...getInputProps()} />
        {
          isDragActive ?
            <p>ドロップ中。。。</p> :
            <p>ファイルをドロップ</p>
        }
        <Button type="button" onClick={open} className="btn btn-primary align-self-center">ファイルを選択</Button>
      </div>
      <aside className="mt-1">
        <h4 className="mb-0">ファイル</h4>
        <ul>{files}</ul>
      </aside>
    </div>
  );
}
