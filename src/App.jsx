import { Route, Routes } from 'react-router-dom';
import { useEffect } from "react";
import { AnimatePresence } from 'framer-motion';
import './App.css'
import { CreateContainer, Header, MainContainer } from './components';
import { useStateValue } from "./context/StateProvider";
import { getAllFoodItems } from "./utils/firebaseFunction";
import { actionType } from "./context/reducer";

function App() {

  const [{ foodItems }, dispatch] = useStateValue();

  const fetchData = async () => {
    await getAllFoodItems().then((data) => {
      dispatch({
        type: actionType.SET_FOOD_ITEMS,
        foodItems: data,
      });
    });
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    
      <AnimatePresence >
        <div className='w-screen h-auto flex flex-col bg-primary'>
        <Header/>
        

        <main className="mt-20 p-8 w-full">
          <Routes>
            <Route path="/*" element={<MainContainer/>} />
            <Route path="/createItem" element={<CreateContainer />} />  
          </Routes>
        </main> 
      </div>
      </AnimatePresence>
    
  );
};

export default App;