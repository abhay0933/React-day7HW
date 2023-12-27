import {useState} from "react";
import Restraunt from "./Restraunt";
import RestrauntCard from "./RestrauntCard.json"

const Main = () => {
    let [restrauntData, setrestrauntData]= useState(RestrauntCard)

    const onkeychange = (e) => {
        const searchvalue= e.target.value;
        const filterdata = RestrauntCard.filter((data) => data.name.toLowerCase().includes(searchvalue.toLowerCase()));
       setrestrauntData(filterdata);
    };

    const setrating = (e) => {
        const rating= e.target.value;
        const filterdata = RestrauntCard.filter((data) => data.rating >= rating);
       setrestrauntData(filterdata);
    };

    return(
        <>
      <div class= "search">
        <input type= "text" placeholder= "Search Restraunts.." onChange= {onkeychange}/>
        <input type= "number" class= "rating" min= {0} max={6} onChange={setrating}/>
      </div>
      <section>
        {
            restrauntData.map ((cards) => {
             return <Restraunt key= {cards._id._id} {...cards}/>
            })
        }
      </section>
      </>
    );
}; 

export default Main;