import { PDFDownloadLink, PDFViewer, Page, Text, View, Font, Document, StyleSheet } from '@react-pdf/renderer';

// 日本語文字化け対策用
import fontRegular from '../../fonts/Nasu-Regular.ttf' 
import fontBold from '../../fonts/Nasu-Bold.ttf'

function BasicDocument() {
  // フォント「ナス レギュラー」
  Font.register({
    family: 'Nasu-Regular',
    src: fontRegular
  });
  // フォント「ナス 太字」
  Font.register({
    family: 'Nasu-Bold',
    src: fontBold
  });
  // CSSスタイル定義
  const styles = StyleSheet.create({
    text1: { fontSize: '11pt', fontFamily: 'Nasu-Regular' },
    text2: { fontSize: '8pt', fontFamily: 'Nasu-Regular' },
    text3: { fontSize: '7pt', fontFamily: 'Nasu-Regular' },

    page: {
      backgroundColor: "white",
      color: "black",
    },
    body: {
      fontFamily: 'Nasu-Regular',
      margin: 10,
      padding: 10,
      fontSize: '11pt',
    },
    mainSection: {
      padding: "0 20px",
    },
    sectionTitle: {
      marginBottom: "5px"
    },  
    formName: {
      textAlign: "center",
      marginBottom: "30px",
      fontSize: "16px"
    },
    requestedDate: {
      marginBottom: "20px"
    },
    workInfo: {
      display: "flex", 
      flexDirection: "row",
      justifyContent: "space-between",
      gap: '20px 20px',
      marginBottom: "20px"
    },
    workInfoInner: {
      borderBottom: "1px solid #000",
      marginBottom: "15px",
      display: "flex", 
      flexDirection: "row",
      justifyContent: "space-between",
    },
    workInfoInnerText: {
    },
    workInfoLeft: {
      width: "45%"
    },
    workInfoRight: {
      width: "45%"
    },
    enforcementDate: {
      margin: "0 auto 20px",
      width: "100%",
    },
    enforcementDateName: {
      marginBottom: "20px"
    },
    enforcementDateInner: {
      
    },
    enforcementDateInnerBox: {
      borderBottom: "1px solid #000",
      marginBottom: "10px",
      display: "flex", 
      flexDirection: "row",
      justifyContent: "space-between",
      padding: "0px 10px",
      marginBottom: "15px"
    },
    dossier: {
      marginBottom: "20px"
    },
    dossierInner: {
    },
    table: {
      width: "auto",
    },
    tableRow: {
      border: "1px solid #000",
      borderRightWidth: 0,
      borderBottomWidth: 0,
      display: "flex",
      flexDirection: "row",
    },
    tableRowUnder: {
      border: "1px solid #000",
      borderRightWidth: 0,
      borderTopWidth: 1,
      display: "flex",
      flexDirection: "row",
    },
    tableCol: {
      border: "1px solid #000",
      borderLeftWidth: 0,
      borderTopWidth: 0,
      borderBottomWidth: 0,
      margin: "0",
      padding: "3px 10px",
      width: "80px",
      textAlign: "center",
    },
    tableCell: {
      margin: 5,
      fontSize: 12,
      fontWeight: 500,
    },
    notes: {
      marginBottom: "20px"
    },
    remarks: {
      marginBottom: "20px"
    },
    textBox: {
      border: "1px solid #000",
      height: "80px",
    },  
    section: {
      margin: 10,
      padding: 10,
    },
    viewer: {
      position: "absolute",
      left: 0,
      top: 0,
      width: "100%",
      height: "100vh",
      zIndex: 999,
    },

  });

  return (
    <PDFViewer style={styles.viewer}>
      {/* Start of the document*/}
      <Document>
        {/*render a single page*/}
        <Page size="A4" style={styles.page}>
          <View style={styles.body}>
            {/* 帳票名 */}
            <View style={styles.formName}>
              <Text>組立依頼</Text>
            </View>
            {/* 依頼日 */}
            <View style={styles.requestedDate}>
              <Text>依頼日：　　／　（　）　（電話　・　メール　・　FAX　・　ダンドリ　・　荒木　・　中島・　髙木）</Text>
            </View>
            {/* 案件情報 */}
            <View style={styles.workInfo}>
              <View style={styles.workInfoLeft}>
                {/* 左 */}
                <View style={styles.workInfoInner}>
                  <Text>お客様名：</Text>
                  {/* <Text>様</Text> */}
                </View>
                <View style={styles.workInfoInner}>
                  <Text>現場名：</Text>
                  <Text>様邸</Text>
                </View>
                <View style={styles.workInfoInner}>
                  <Text>工事形態：</Text>
                </View>
              </View>
              {/* 右 */}
              <View style={styles.workInfoRight}>
                <View style={styles.workInfoInner}>
                  <Text>担当者名：</Text>
                  <Text>様</Text>
                </View>
                <View style={styles.workInfoInner}>
                  <Text>住所：</Text>
                </View>
                <View style={styles.workInfoInner}>
                  <Text>工事内容：</Text>
                </View>
              </View>
            </View>
            <View style={styles.mainSection}>
              {/* 施行日 */}
              <View style={styles.enforcementDate}>
                <View style={styles.sectionTitle}>
                  <Text>《施行日》</Text>
                </View>
                <View style={styles.enforcementDateInner}>
                  <View style={styles.enforcementDateInnerBox}>
                    <Text>　／　（　）　組　・　解　</Text>
                    <Text>朝一・AM・PM・夕方</Text>
                  </View>
                  <View style={styles.enforcementDateInnerBox}>
                    <Text>　／　（　）　組　・　解　</Text>
                    <Text>朝一・AM・PM・夕方</Text>
                  </View>
                  <View style={styles.enforcementDateInnerBox}>
                    <Text>　／　（　）　組　・　解　</Text>
                    <Text>朝一・AM・PM・夕方</Text>
                  </View>
                  <View style={styles.enforcementDateInnerBox}>
                    <Text>　／　（　）　組　・　解　</Text>
                    <Text>朝一・AM・PM・夕方</Text>
                  </View>
                  <View style={styles.enforcementDateInnerBox}>
                    <Text>　／　（　）　組　・　解　</Text>
                    <Text>朝一・AM・PM・夕方</Text>
                  </View>
                  <View style={styles.enforcementDateInnerBox}>
                    <Text>　／　（　）　組　・　解　</Text>
                    <Text>朝一・AM・PM・夕方</Text>
                  </View>
                </View>
              </View>
              {/* 関係書類 */}
              <View style={styles.dossier}>
                <View style={styles.sectionTitle}>
                  <Text>《関係書類》</Text>
                </View>
                <View style={styles.table}>
                  <View style={styles.tableRow}>
                    <View style={styles.tableCol}>
                      <Text style={styles.tableCell}>地図</Text>
                    </View>
                    <View style={styles.tableCol}>
                      <Text style={styles.tableCell}>配置図</Text>
                    </View>
                    <View style={styles.tableCol}>
                      <Text style={styles.tableCell}>平面図</Text>
                    </View>
                    <View style={styles.tableCol}>
                      <Text style={styles.tableCell}>立面図</Text>
                    </View>
                    <View style={styles.tableCol}>
                      <Text style={styles.tableCell}>工程表</Text>
                    </View>
                    <View style={styles.tableCol}>
                      <Text style={styles.tableCell}>依頼書</Text>
                    </View>
                    <View style={styles.tableCol}>
                      <Text style={styles.tableCell}>写真</Text>
                    </View>
                  </View>
                  <View style={styles.tableRowUnder}>
                    <View style={styles.tableCol}>
                      <Text style={styles.tableCell}>◯</Text>
                    </View>
                    <View style={styles.tableCol}>
                      <Text style={styles.tableCell}>◯</Text>
                    </View>
                    <View style={styles.tableCol}>
                      <Text style={styles.tableCell}>◯</Text>
                    </View>
                    <View style={styles.tableCol}>
                      <Text style={styles.tableCell}>◯</Text>
                    </View>
                    <View style={styles.tableCol}>
                      <Text style={styles.tableCell}>◯</Text>
                    </View>
                    <View style={styles.tableCol}>
                      <Text style={styles.tableCell}>◯</Text>
                    </View>
                    <View style={styles.tableCol}>
                      <Text style={styles.tableCell}>◯</Text>
                    </View>
                  </View>
                </View>
              </View>
              {/* 注意事項 */}
              <View style={styles.notes}>
                <View style={styles.sectionTitle}><Text>《注意事項》</Text></View>
                <View style={styles.textBox}>
                  <Text>※出庫表・組立後図面は必ず持ち帰ってきて下さい。</Text>
                </View>
              </View>
              {/* 備考 */}
              <View style={styles.remarks}>
                <View style={styles.sectionTitle}><Text>《備考》</Text></View>
                <View style={styles.textBox}>
                  <Text></Text>
                </View>
              </View>
            </View>
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
}
export default BasicDocument;