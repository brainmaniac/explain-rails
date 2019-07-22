import React from 'react';

function QueryInput(){
    return(
        <form>
            <label>
                What query should I explain?<br />
                <input className="input-field" type="text" name="name" />
            </label>
            <br />
            <input type="submit" value="Submit" />
        </form>
    )
}

export default QueryInput;