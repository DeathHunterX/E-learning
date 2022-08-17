import React from 'react'
import { filterMap } from './FilterList'

const Filter = () => {
    
  return (
    <div>
        <div className="accordion accordion-flush my-3" id="accordionExample">
            {filterMap.map((filter, idx) => {
                return (
                    <div className="accordion-item" key={idx}>
                        <h2 className="accordion-header" id={`${filter.id}`}>
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${idx}`} aria-expanded="true" aria-controls={`#collapse${idx}`}>
                            {filter.header}
                        </button>
                        </h2>
                        <div id={`collapse${idx}`} className="accordion-collapse collapse show" aria-labelledby={`${filter.id}`}>
                        <div className="accordion-body">
                            {filter.selection.map((selection, idx2) => {
                                return(
                                    <div className="form-check" key={idx2}>
                                        <input className="form-check-input" type="checkbox" id={`defaultCheck${idx2}`} 
                                        value={`${filter.id}=${selection}`} 
                                        // onChange={e => handleChange(checked ? setCategory('') : setCategory(e.target.value))} 
                                        />
                                        <label className="form-check-label" htmlFor={`defaultCheck${idx2}`} >
                                            {selection}
                                        </label>
                                        
                                    </div> 
                                )
                            })}
                        </div>
                        </div>
                    </div>
                )
            })}
        </div>
    </div>
  ) 
}

export default Filter