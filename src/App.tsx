import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './Hello';
import Calendar from './components/Calender/calendar';

function App() {

  const [value, setValue] = React.useState(new Date());
  // const [day, setDay] = React.useState<number>();
  // const [month, setMonth] = React.useState<number>();
  // const [year, setYear] = React.useState<number>();

  const [date, setDate] = React.useState();
  const [visible, setVIsible] = React.useState<boolean>(false);

  const isVisible = () => {
    setVIsible(!visible)
  }

  return (
    <div >
      {/* <Hello /> */}
      
      <Calendar date={value} />
    </div>
  );
}

export default App;

