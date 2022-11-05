import React, { useState, useEffect, useContext, Children } from "react";
import {
  Table,
  Thead,
  Tbody,
  Ttht,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Box,
  Text,
  Button,
  Input
} from '@chakra-ui/react'
import styles from "./searchbox.module.css";
import "./searchbox.css"

export const SearchBox = () => {
  return (
    <>
        <table>
          <tbody>
            <tr>
              <th className={styles.th}>日付</th>
              <td className={styles.td}><Input type="date"/></td>
              <th className={styles.th}>担当</th>
              <td className={styles.td}><Input/></td>
            </tr>
            <tr>
              <th className={styles.th}>案件</th>
              <td className={styles.td}><Input/></td>
              <th className={styles.th}>完了</th>
              <td className={styles.td}><Input/></td>
            </tr>
            <tr>
              <th className={styles.th}>得意先</th>
              <td className={styles.td}><Input/></td>
              <th className={styles.th}>得意先担当者</th>
              <td className={styles.td}><Input/></td>
            </tr>
            <tr>
              <th className={styles.th}>チェック項目</th>
              <td className={styles.td} colSpan="3"><Input/></td>
            </tr>
            <tr>
              <th className={styles.th}>キーワード検索</th>
              <td className={styles.td} colSpan="3"><Input/></td>
            </tr>
          </tbody>
        </table>

    </>
  )
}
