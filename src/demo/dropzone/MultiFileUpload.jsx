import { useState, useEffect, useCallback, useMemo } from "react";

import { useDropzone } from "react-dropzone";
import { Button, Text, useBreakpointValue, Box, CloseButton } from "@chakra-ui/react";

import fileStyle from "./UploadFrom.module.css";

export const MultiFileUpload = (props) => {
    // const { setFormData, name, defaultvalue } = props
    const [files, setfiles] = useState()
    // console.log(files && files)
    // files && files.map((file) => (
    //   console.log(file.name)
    // ))

    const onDrop = useCallback((acceptedFiles) => {
        // Do something with the files
        console.log("acceptedFiles:", acceptedFiles);
        // const filenames = acceptedFiles.map(file => file.name)
        console.log(acceptedFiles)
        setfiles(acceptedFiles)
        // props.setFormData((prevState) => ({
        //     ...prevState,
        //     file: acceptedFiles[0],
        // }));
        // props.setFormData((prevState) => ({
        //     ...prevState,
        //     [name]: `/storage/truck/${acceptedFiles[0].name}`,
        // }));
    }, []);

    const { getRootProps, getInputProps, isDragActive, open, acceptedFiles } =
        useDropzone({ onDrop, noClick: true });

    const MAIN_COLOR = "gray";
    const breakPointButton = useBreakpointValue(["sm", "sm", "md"]);
    const breakPointButtonSelect = useBreakpointValue(["sm", "md"]);
    // const setedFiles = settingFiles(e);
    const handleChange = (e) => {
        // console.log(123);
        // setfiles(e.target.files[0]);
    };
    const handleClick = (e) => {
        document.getElementById("input_id").click(e);
    };
    const deleteImage = (e) => {
      // e.stopPropagation()
      // console.log(e.currentTarget)
      const filesCp = [...files]
      const index = e.currentTarget.id
      filesCp.splice(index, 1)
      setfiles(filesCp)
        // const filesCp = [...files]
        // setfiles();
        // props.setFormData((prevState) => ({
        //     ...prevState,
        //     [name]: "/storage/truck/noimage.png",
        // }));
    };
    return (
        <>
            {/* <input type="file" accept="image/*" onChange={onChangeHandler} /> */}
            <Box>
                    <Box
                        {...getRootProps()}
                        className={
                            isDragActive ? fileStyle.dropActive : fileStyle.field
                        }
                        // onDrop={handleDrop}
                        // onDragOver={onDragO}
                        // onDragEnter={onDragE}
                        onClick={() => {}}
                        >
                        <input type="file" {...getInputProps()} />
                        <Box className={fileStyle.dropField}>
                            <Box>
                                <Button
                                    size={breakPointButtonSelect}
                                    colorScheme={MAIN_COLOR}
                                    onClick={open}
                                >
                                    ファイルを選択
                                </Button>
                                <Text
                                    color={"gray"}
                                    fontWeight={"bold"}
                                    display={"flex"}
                                    justifyContent={"center"}
                                >
                                    または、ファイルをドロップ
                                </Text>
                            </Box>
                        </Box>
                        {files && files.map((file, index) => (
                        <Box key={index} display="flex" justifyContent="start" alignItems="center" gap="5" mb={3}>
                            <Text>{file.name}</Text>
                            <Box  cursor="pointer">
                            <CloseButton
                                size="sm"
                                bg="rgba(0, 0, 0, 0.3)"
                                _hover={{ bg: "rgba(0, 0, 0, 0.7)" }}
                                color="white"
                                rounded="full"
                                id={index} 
                                onClick={(e) => deleteImage(e)}
                            />
                            </Box>
                        </Box>
                        ))}
                    </Box>
            </Box>
        </>
    );
};