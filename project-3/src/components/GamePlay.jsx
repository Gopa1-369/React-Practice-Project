import React from 'react'
import TotalScore from './TotalScroe'
import NumberSelector from './NumberSelector'
import styled from 'styled-components'
import RoleDice from './RoleDice.jsx'
import { useState } from 'react'
import { Button, OutlineButton } from '../styled/Button.js'
import Rules from './rules.jsx'



const GamePlay = () => {
  const [selectedNumber , setSelectedNumber]=useState()
  const [currentDice , setCurrentDice]=useState(1)
  const [score,setScore]=useState(0)
  const [error,setError]=useState()
  const [showRules , setShowRules]=useState(false)


  function getRandomArbitrary(min, max) {
    //    console.log(Math.floor(Math.random() * (max - min + 1) + min))
       return Math.floor(Math.random() * (max - min + 1) + min);

    

      }



   const roleDie = () =>{

    if(!selectedNumber){
      setError("You have not selected any number")
      return
    }
        const randomNumber=getRandomArbitrary(1,6)
          setCurrentDice((prev)=>randomNumber)

        

          if (selectedNumber===randomNumber){
            setScore((prev)=>prev + randomNumber)
          }else{
            setScore((prev)=>prev - 2)
          }
          setSelectedNumber(undefined)
      }


      const resetScore = () =>{
        setScore(0)
      }

  return (
<MainContainer className={showRules ? "blur" : ""}>
  <div className='top_section'>

  <TotalScore score={score}/>
  <NumberSelector  setError={setError} error={error} selectedNumber={selectedNumber}
  setSelectedNumber={setSelectedNumber}/>
  </div>
    
<RoleDice currentDice={currentDice} setCurrentDice={setCurrentDice} roleDie={roleDie}/>
   <div className="btns">
    <OutlineButton onClick={resetScore}>Reset Score
    </OutlineButton>

    <Button onClick={()=>setShowRules(prev=>!prev)}>
{showRules ? "Hide" : "Show"} Rules
    </Button>
   </div>

  {showRules && (
        <>
          <Overlay onClick={() => setShowRules(false)} />
          <Rules />
        </>
         )}
  </MainContainer>
  )
}

export default GamePlay








const MainContainer = styled.main`
  padding-top: 70px;
  position: relative;

  /* Blur effect when rules are shown */
  filter: ${({ blur }) => (blur ? 'blur(5px)' : 'none')};

  .top_section {
    display: flex;
    justify-content: space-around;
    align-items: end;
  }

  .btns {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  z-index: 1000;
`;


// const MainContainer=styled.main`
// padding-top:70px;
//   .top_section{
// display:flex;
// justify-content:space-around;
// align-items:end;


//   }
//   .btns{
//     display: flex;
//     flex-direction:column;
//     justify-content: center;
//     max-width:center;
//     align-items:center;
//     gap:10px;

//   }
// `