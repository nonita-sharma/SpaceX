import React from "react";
import { Button} from "react-bootstrap";



const FilterLaunch = (props) => {
  
  return (
    <div className={props.styles.filter_card}>
      <div className={props.styles.filter_section_header}>Successful Launch</div>
      <hr width="50%" />
      
      <div className="App-filter-button-container">
                      <Button
                        className="App-filter-button"
                        variant={
                          props.launchSuccess === "true"
                            ? "success"
                            : "outline-success"
                        }
                        onClick={(e) =>
                          props.launchSuccess === "true"?
                          props.onUpdateLaunch(undefined)
                          :
                          props.onUpdateLaunch(e.target.value)
                        }
                        value="true"
                      >
                        True
                      </Button>

                      <Button
                        className="App-filter-button"
                        variant={
                          props.launchSuccess === "false"
                            ? "success"
                            : "outline-success"
                        }
                        onClick={(e) =>
                          props.launchSuccess === "false"?
                          props.onUpdateLaunch(undefined)
                          :
                          props.onUpdateLaunch(e.target.value)
                        }
                        value="false"
                      >
                        False
                      </Button>
                    </div>

    </div>
  );
};

export default FilterLaunch;








