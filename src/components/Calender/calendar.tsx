import React, { useEffect } from 'react';

import { months } from '../Calendar/consts';
import { generateMatrix } from './utils';





export default function Calendar({ date = new Date() }: { date: Date }) {
  
  const [activeDate, setActiveDate] = React.useState(date);
  
  const [visible, setVIsible] = React.useState<boolean>(false);
  const [dateValue, setDateValue ] = React.useState<string>("")

  const isVisible = () => {
    setVIsible(!visible)
  }

  useEffect(() => {
    if (activeDate != date) {
      setActiveDate(date);
    }
  }, [date]);

  const _onPress = (item: number) => {
    console.log("date")
    if (typeof item !== 'string' && item != -1) {
      const newDate = new Date(activeDate.setDate(item));
      setActiveDate(newDate);
      setVIsible(!visible)
      console.log(newDate.getDate())
      console.log(newDate.getMonth() + 1)
      console.log(newDate.getFullYear())
      var day = newDate.getDate().toString()
      var month = (newDate.getMonth() + 1).toString()
      var year = newDate.getFullYear().toString()
      var dateValue = day +"/" + month + "/"+ year;
      setDateValue(dateValue)

    }
  };

  const matrix = generateMatrix(activeDate);
  let rows = [];


  rows = matrix.map((row, rowIndex: number) => {
    let rowItems = row.map((item: any, colIndex: number) => {

      // console.log(activeDate.getDate() )
      return (
        <button
            key={colIndex} style={{
              ...styles.date, ...item == activeDate.getDate()
            ? styles.activeDate
            : styles.inActiveDate,
          }} onClick={() => { _onPress(item) }}
        >
          
          <p style={{...{
              color: colIndex == 0 ? "red" : "black",
              fontWeight: item == activeDate.getDate() ? 'bold' : 'normal',
          }, ...styles.dateText,
          }}>
            
            {item != -1 ? item : ''}
          </p>

        </button>
      );
    });

    return <div key={rowIndex} style={styles.rowContainer} >{rowItems}</div>;
  });

  const changeMonth = (n: number) => {
    const newDate = new Date(activeDate.setMonth(activeDate.getMonth() + n));
    setActiveDate(newDate);
  };

  return (
    <>
      <input type="text" value={dateValue || "1/1/2022"} onClick={() => { isVisible() }} />
    <div style={styles.container}>
       
        
        {
            visible? <><div style={styles.leftContent}>
            <p style={styles.currentDate}>
              {`${months[activeDate.getMonth()]} ${activeDate.getFullYear()}`}
            </p>
            <div style={styles.actionContainer}>
              <div style={styles.buttonContainer}>
                <button onClick={() => changeMonth(-1)}>
                  Précédent
                </button>
              </div>
              <div style={styles.buttonContainer}>
                
                <button onClick={() => changeMonth(+1)}>
                  suivant
                </button>
              </div>
            </div>
  
          </div>
        
            <div>{rows}</div>
          </> : <div></div>
        }
        
      
    </div>
    </>
    
 )

}



const styles = {
  container: {
    display: 'flex',
  },
  rowContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  date: {
    height: 30,
    width: 30,
    justifyContent: 'center',
    alignItems: 'center',
    border: "none",
  },

  activeDate: { backgroundColor: "#ff6781", borderRadius: 5 },
  inActiveDate: { backgroundColor: '#fff' },
  dateText: {
    // textAlign: 'center',
    fontSize: 12
  },
  actionContainer: { justifyContent: 'space-around', flex: 1, marginTop: 8 },
  buttonContainer: { flex: 1, marginHorizontal: 2,  width: 200 },
  currentDate: { alignItems: 'center',fontWeight: '600', fontSize: 12, TextAlign: 'center', height: 100,
    width: 200,
  },
  leftContent: {
    width: 100,
    backgroundColor: "",
    justifyContent: 'center',
  }
}