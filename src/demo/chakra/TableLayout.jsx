import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";

const tableWrap = {
  whiteSpace: "wrap",
  backgroundColor: "red",
};
const tableStyle = {
  border: "1px solid #000",
  width: "300px",
};
const thStyle = {
  border: "1px solid #000",
};
const tdStyle = {
  border: "1px solid #000",
  wordBreak: "break-all",
  width: "30px",
};

export const TableLayout = () => {
  return (
    <>
      <TableContainer whiteSpace="pre-wrap">
        <Table style={tableStyle}>
          <Thead>
            <Tr>
              <Th style={thStyle}>into</Th>
              <Th style={thStyle}>into</Th>
              <Th style={thStyle}>into</Th>
              <Th style={thStyle}>into</Th>
              <Th style={thStyle}>into</Th>
              <Th style={thStyle}>into</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td style={tdStyle}>
                日本語を設定すると、いい感じで改行されます。下の例では2行におさまるように幅が割り付けられます。
              </Td>
              <Td style={tdStyle}>
                日本語を設定すると、いい感じで改行されます。下の例では2行におさまるように幅が割り付けられます。
              </Td>
              <Td style={tdStyle}>
                日本語を設定すると、いい感じで改行されます。下の例では2行におさまるように幅が割り付けられます。
              </Td>
              <Td style={tdStyle}>
                日本語を設定すると、いい感じで改行されます。下の例では2行におさまるように幅が割り付けられます。
              </Td>
              <Td style={tdStyle}>
                日本語を設定すると、いい感じで改行されます。下の例では2行におさまるように幅が割り付けられます。
              </Td>
              <Td style={tdStyle}>
                aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>into</th>
            <th style={thStyle}>into</th>
            <th style={thStyle}>into</th>
            <th style={thStyle}>into</th>
            <th style={thStyle}>into</th>
            <th style={thStyle}>into</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={tdStyle}>
              日本語を設定すると、いい感じで改行されます。下の例では2行におさまるように幅が割り付けられます。
            </td>
            <td style={tdStyle}>
              日本語を設定すると、いい感じで改行されます。下の例では2行におさまるように幅が割り付けられます。
            </td>
            <td style={tdStyle}>
              日本語を設定すると、いい感じで改行されます。下の例では2行におさまるように幅が割り付けられます。
            </td>
            <td style={tdStyle}>
              日本語を設定すると、いい感じで改行されます。下の例では2行におさまるように幅が割り付けられます。
            </td>
            <td style={tdStyle}>
              日本語を設定すると、いい感じで改行されます。下の例では2行におさまるように幅が割り付けられます。
            </td>
            <td style={tdStyle}>
              aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};
