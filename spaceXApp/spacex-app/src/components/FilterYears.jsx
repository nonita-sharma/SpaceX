import React from "react";
import {Row, Button} from "react-bootstrap";

const FilterYears = (props ) => {
  
  const uniqueLaunchYears = new Array(15).fill(0).map((_, index) => 2006 + index);
  
  return (
    <div className={props.styles.filter_card}>
      <div className={props.styles.filter_section_header}>Launch Year</div>
      <hr width="50%" />
      

      <Row>
                      <div className="App-filter-button-container">
                        {uniqueLaunchYears.map((year) => {
                          return (
                            <Button
                              className="App-filter-button"
                              variant={
                                props.launchYear ===
                                year.toString()
                                  ? "success"
                                  : "outline-success"
                              }
                              value={year}
                              onClick={(e) =>
                                e.target.value === props.launchYear ?
                                props.onUpdateYear(undefined)
                                :
                                props.onUpdateYear(e.target.value)
                                
                              }
                            >
                              {year}
                            </Button>
                          );
                        })}
                      </div>
                    </Row>
        
       
       
    </div>
  );
};

export default FilterYears;


