import styled from "styled-components"
import { BASE_URL, Container } from "../../App";
import { Button } from "../../App";

const SearchResults = ({ data }) => {
    return (
      <FoodCardContainer>
       <Container>
       <FoodCards>
          {data?.map(({name,image,text,price}) => (
            <FoodCard key={name}>
              <div className="food_image">
                <img src={BASE_URL+image} alt={name} />
              </div>
              <div className="food_info">
                 <div className="info">
                    <h3>{name}</h3>
                    <p>{text}</p>
                 </div>
                <Button>${price.toFixed(2)}</Button>
              </div>
            </FoodCard>
          ))}
        </FoodCards>
       </Container>
      </FoodCardContainer>
    );
  };
  

export default SearchResults


const FoodCardContainer = styled.section`
  min-height: calc(100vh - 210px); /* Adjust based on other content */
  background-image: url("/bg.png");
  background-size: cover; /* Ensures the image covers the entire container */
  background-position: center; /* Centers the image */
  background-repeat: no-repeat; /* Prevents repeating of the background image */
  background-attachment: scroll; /* Allows the background to scroll with content */
  background-color: rgba(0, 0, 0, 0.5); /* Optional fallback color for loading states */

  /* Responsive adjustments */
  @media (max-width: 1024px) {
    min-height: calc(100vh - 180px); /* Adjust based on smaller screens */
  }

  @media (max-width: 768px) {
    min-height: calc(100vh - 150px); /* Further adjust for tablets */
  }

  @media (max-width: 480px) {
    min-height: calc(100vh - 100px); /* Further adjust for mobile screens */
  }
`;




const FoodCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  row-gap: 32px;
  column-gap: 20px;
  justify-content: center;
  align-items: center;
  padding-top: 80px;
`;





const FoodCard = styled.div`
  width: 100%;
  max-width: 340px; /* Maximum width of the card */
  height: auto; /* Maintain aspect ratio */
  border: 0.66px solid;
  border-image-source: radial-gradient(
      80.69% 208.78% at 108.28% 112.58%,
      #eabfff 0%,
      rgba(135, 38, 183, 0) 100%
    ),
    radial-gradient(
      80.38% 222.5% at -13.75% -12.36%,
      #98f9ff 0%,
      rgba(255, 255, 255, 0) 100%
    );
  background: url(.png),
    radial-gradient(
      90.16% 143.01% at 15.32% 21.04%,
      rgba(165, 239, 255, 0.2) 0%,
      rgba(110, 191, 244, 0.0447917) 77.08%,
      rgba(70, 144, 213, 0) 100%
    );
  background-blend-mode: overlay, normal;
  backdrop-filter: blur(13.1842px);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  padding: 8px;

  /* Ensure images inside the card are responsive */
  .food_image img {
    width: 100%; /* Make sure the image fits within the card */
    height: auto; /* Maintain aspect ratio */
    border-radius: 20px; /* Optional: add rounding to image corners */
  }

  .food_info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: end;

    h3 {
      margin-top: 8px;
      font-size: 16px;
      font-weight: 500;
    }
    p {
      margin-top: 4px;
      font-size: 12px;
    }
    button {
      font-size: 12px;
    }
  }

  /* Media Query for Smaller Screens */
  @media (max-width: 768px) {
    max-width: 90%; /* Adjust card width for smaller screens */
  }

  @media (max-width: 480px) {
    max-width: 100%; /* Further adjust card width for very small screens */
  }
`;
