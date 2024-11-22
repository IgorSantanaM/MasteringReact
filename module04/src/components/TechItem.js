import React from 'react'
import PropTypes from 'prop-types' 

function TechItem({tech, onDelete}){ // props props.tech
    return(
        <li key={tech}> 
            {tech}
            <button onClick={onDelete} type="button">Remove</button>
        </li>
    );
}

TechItem.defaultProps = {
    tech: 'hidden',
}

TechItem.propTypes = {
    tech: PropTypes.string,
    onDelete: PropTypes.func.isRequired,
}

export default TechItem;