import { useState } from 'react'
import { SketchPicker } from 'react-color';
import styles from './ColorPicker.module.css';

export const ColorPicker = (props) => {
  const [isOpen, setIsOpen] = useState(false)
  const [color, setColor] = useState('#FFF')

  const handleChange = (color) => {
    setColor(color.hex)
  }
  const handleOpen = () => {
    setIsOpen(true)
  }
  const handleClose = () => {
    setIsOpen(false)
  }


  return (
    <>
      <h1>カラーピッカー</h1>
      <label>input type="color"</label>
      <input type="color" />

      <div className={styles.container}>
        <p>react-color</p>
          <div className={styles.containerLeft}>
            <div className={styles.bar} onClick={handleOpen}>
              <div className={styles.barLeft}>カラーを選択する</div>
              <div className={styles.barRight} style={ { background: color } }></div>
            </div>
          </div>
          <div className={styles.containerRight}>
            {/* 選択されたカラーがbackgroudに反映されます。 */}
            <div className={styles.colorBox} style={ { background: color } }></div>
          </div>
        </div>
        {isOpen && (
          <div className={styles.pikker}>
            {/* 背景クリック用の領域確保 */}
            <div className={styles.pikkerBack} onClick={handleClose}></div>
            <SketchPicker
              color={ color }
              onChange={ handleChange }
            />
          </div>
        )}
    </>
  )
}