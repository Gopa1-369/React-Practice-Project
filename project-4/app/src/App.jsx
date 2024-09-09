import styled from "styled-components";
import { useState } from "react";
import { useEffect } from "react";
import SearchResults from "./components/SearchResults/SearchResults";


//we use global css in main.jsx

//we put unique data in capital variablehere we use data fro url
export const BASE_URL = "http://localhost:9000"

const App = () => {

  const [data, setdata] = useState(null)
  const [loading, setLoading] = useState()
  const [error, setError] = useState(null)
  const [filteredData, setFilteredData] = useState(null)
  const [selectedBtn, setSelectedBtn] = useState("all")

  //network call

  useEffect(() => {
    const fetchFoodData = async () => {
      setLoading(true);
      try {
        const response = await fetch(BASE_URL);
        const json = await response.json();
        // console.log(json); // Log the data to check its structure
        setdata(json);


        setFilteredData(json)

        setLoading(false);
      } catch (error) {
        setError("Unable to fetch data");
        setLoading(false); // Make sure to set loading to false on error
      }
    };
    fetchFoodData();
  }, []);


console.log("datA:"+data)

  //for filter
  const searchFood = (e) => {
    const searchValue = e.target.value;

    // console.log(searchValue);

    if (searchValue === "") {
      setFilteredData(null);
    }

    const filter = data?.filter((food) =>
      food.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredData(filter);
  };


  const filterFood = (type) => {
    if (type === "all") {
      setFilteredData(data)
      setSelectedBtn("all")
      return
    }



    const filter = data?.filter((food) =>
      food.type.toLowerCase().includes(type.toLowerCase())
    );
    setFilteredData(filter);
    selectedBtn(type)

  }


  //for map over button
  const filterBtns = [
    {
      name: "All",
      type: "all",
    },
    {
      name: "Breakfast",
      type: "breakfast",
    },
    {
      name: "Lunch",
      type: "lunch",
    },
    {
      name: "Dinner",
      type: "dinner",
    },
  ];

  //for show erroe on ui
  if (error) {
    return <div>{error}</div>
  }

  //for show loading before data show on ui
  if (loading) {
    return <div>loading....</div>
  }

  return (
    <>
      <Container>
        <TopContainer>
          <div className="logo">
            <img src="/logo.svg" alt="logo" />

          </div>
          <div className='search'>
            <input onChange={searchFood} placeholder='Search Food' />
          </div>
        </TopContainer>
        <FilterContainer>
          {filterBtns.map((value) => (
            <Button
              isSelected={selectedBtn === value.type}
              key={value.name}
              onClick={() => filterFood(value.type)}
            >
              {value.name}
            </Button>
          ))}
        </FilterContainer>


      </Container>
      <SearchResults data={filteredData} />
    </>
  )
};

export default App;


export const Container = styled.div`
  max-width: 1200px; /* Max width for larger screens */
  margin: 0 auto; /* Center the container */
  padding: 0 16px; /* Optional padding for small screens */
  width: 100%; /* Ensure full width on smaller screens */
`;



const TopContainer = styled.section`
  height: 140px;
  display: flex;
  justify-content: space-between;
  padding: 16px;
  align-items: center;

  .search {
    input {
      background-color: transparent;
      border: 1px solid red;
      color: white;
      border-radius: 5px;
      height: 40px;
      font-size: 16px;
      padding: 0 10px;
    }
  }

  @media (max-width: 600px) {
    flex-direction: column;
    height: auto; /* Adjust height for smaller screens */
  }
`;



const FilterContainer = styled.section`
    display: flex;
    justify-content: center;
    gap:12px;
    color:white;
    padding-bottom:40px;
`

export const Button = styled.button`

  background-color:${({ isSelected }) => (isSelected ? "#f22f2f" : "#ff4343")};
  border-radius:5px;
  padding: 6px 12px;
  border:none;
  cursor: pointer;
  &:hover{
    background-color:#cf0303;
  }
`

