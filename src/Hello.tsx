import React from 'react';

export default function Hello() {
  return (
    <>
      <div style={styles.mystyle}>
     
        <p>trest</p>
        <p>Damiens</p>
        <p>Arnaud</p>
      </div>
    </>
  );
}



const styles = {
  container: {
    
  },

  mystyle: {
    justifyContent: "center",
    color: "white",
    backgroundColor: "Blue",
    // padding: "10px",
    width: "100%",
    height: "100%",
    fontFamily: "Arial",
  }
}