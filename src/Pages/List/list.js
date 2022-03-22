import React, { useState, useEffect, useCallback } from "react";
import Pagination from "../../Components/Pagination/pagination.component";
import ListComponent from "../../Components/List/list.component";
import { getAllLinks } from "../../Utils/storage.util";
import { sort } from "../../Utils/sort.util";
import "./list.css";

function List() {
  const [sortValue, setSortValue] = useState("order");
  const [allLinks, setAllLinks] = useState([]); 
  const [paginatedLinks, setPaginatedLinks] = useState([]);

  const refreshLinks = ()=> {
    sortLinks(getAllLinks())
  };

  useEffect(() => {
    refreshLinks()
  }, []);

  const sortLinks = useCallback((links)=>{
    setAllLinks(sort(sortValue, links))
  },[sortValue, setAllLinks])

  useEffect(() => {
    refreshLinks()
  }, [sortValue]);


  const onSelectValue = (e) => {
    setSortValue(e.target.value);
  };

  return (
    <div className="list">
      <div className="plus">
        <div className="plusItems">
          <a href="/create">
            <button className="plusButton" type="button">
              +
            </button>
          </a>
          <h3>SUBMIT A LINK</h3>
        </div>
      </div>
      <hr className="hr" />
      <select className="selectVoted" defaultValue={""} placeholder="Order By" onChange={onSelectValue}>
        <option value="" disabled hidden>
          Order by
        </option>
        <option value="most">Most Voted (Z-A)</option>
        <option value="least">Least Voted (A-Z)</option>
      </select>
      <ListComponent refreshLinks={refreshLinks} list={paginatedLinks} />
      <Pagination data={allLinks} pageLimit={5} dataLimit={5} onPaginate={setPaginatedLinks} />
    </div>
  );
}

export default List;
