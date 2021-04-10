import React from "react";
import { Button} from "react-bootstrap";



const FilterLand = (props) => {
  
  return (
    <div className={props.styles.filter_card}>
      <div className={props.styles.filter_section_header}>Successful Landing</div>
      <hr width="50%" />
      
      <div className="App-filter-button-container">
                      <Button
                        className="App-filter-button"
                        variant={
                          props.landSuccess === "true"
                            ? "success"
                            : "outline-success"
                        }
                        onClick={(e) =>
                          props.landSuccess === "true"?
                          props.onUpdateLand(undefined)
                          :
                          props.onUpdateLand(e.target.value)
                        }
                        value="true"
                      >
                        True
                      </Button>

                      <Button
                        className="App-filter-button"
                        variant={
                          props.landSuccess === "false"
                            ? "success"
                            : "outline-success"
                        }
                        onClick={(e) =>
                          props.landSuccess === "false"?
                          props.onUpdateLand(undefined)
                          :
                          props.onUpdateLand(e.target.value)
                        }
                        value="false"
                      >
                        False
                      </Button>
                    </div>

    </div>
  );
};

export default FilterLand;



