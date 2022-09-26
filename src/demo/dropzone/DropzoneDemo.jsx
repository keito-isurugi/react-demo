import { useCallback, useMemo } from "react";
import { useDropzone } from "react-dropzone";
import { Box, Text } from "@chakra-ui/react";

import { Dropzone } from './Dropzone'
import { MultiFileUpload } from './MultiFileUpload'

export const DropzoneDemo = () => {
  return (
    <>
    <Box mb={5}>
      <Text fontSize={20} fontWeight="bold">ドロップゾーンデモ</Text>
      <Dropzone/>
    </Box>
    <Box mb={5} w="30%">
      <Text fontSize={20} fontWeight="bold">複数ファイルアップロード</Text>
      <MultiFileUpload/>
    </Box>
    </>
  );
};
