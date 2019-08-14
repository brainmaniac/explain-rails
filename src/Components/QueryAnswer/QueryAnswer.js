import React from 'react';
import commands from '../../data/commands.js';

let beforeParanthesis = function(str){
    let splitStr = str.split('(')
    return splitStr[0]
}

function QueryAnswer(props) {
    
    let arrayFromInput = props.query.foo.split('.');

    return(
        <div className="answer">
            {arrayFromInput.map((substring, key) => {
                
                let trimmedSubstring = beforeParanthesis(substring)

                if(trimmedSubstring in commands)
                    if(key === 0)
                        return <a className="link-blue" href={commands[trimmedSubstring].url} key={key} target="_blank" rel="noopener norefferer">{substring}</a>
                    else
                        return <span key={key} className="link-blue">.<a className="link-blue" href={commands[trimmedSubstring].url} target="_blank" el="noopener norefferer">{substring}</a></span>

                else
                    if(key === 0)
                        return <span key={key} className="local">{substring}</span>
                    else
                        return <span key={key} className="local">.{substring}</span>

            })}

        </div>
    )
}       

export default QueryAnswer;