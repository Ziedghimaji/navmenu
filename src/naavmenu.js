import React from 'react';

function Navmennu(props) {
    return (
       <nav className="navmen">
       { props.navBar.map(el => <div className="dropdown"> <a href='#' className="dropdown-item">{ el.title}</a>
        <ul>{
          !el.tab ? null : el.tab.map(x=>
                                            <li className="dropdown-content">
                                                <a href='#'>{x}</a>
                                            </li>
            ) 
       }</ul>

       </div>)
    }
       </nav>
    )
}

export default Navmennu ;