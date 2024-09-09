import styled from "styled-components"

const Rules = () => {
  return (
    <RulesContainer>
        <h1>How to play dice game</h1>
        <div className="text">
            <p>Select any number</p>
            <p>Click on dice image</p>
            <p>after click on  dice  if selected number is equal to dice number you will get same point as dice </p>
            <p>if you get wrong guess then  2 point will be dedcuted</p>
        </div>
       
    </RulesContainer>
  )
}

export default Rules









const RulesContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  z-index: 1001;
  width: 800px;
  text-align: center;
`;























// const RulesContainer=styled.div`
// background-color: #fbf1f1;
// padding:20px;
// max-width:800px;
// margin:0 auto;
// z-index:-1;



// h2{
//     font-size:24px;
//     font-weight:bold;
// }

// .text{
//     margin-top:24px;
// }
    
// `