import React from 'react';

function QueryAnswer(props) {
    
    let arrayFromInput = props.query.foo.split('.');
    const commandsFromDocumentation = { 
        "find":"https://guides.rubyonrails.org/active_record_querying.html#find", 
        "take":"https://guides.rubyonrails.org/active_record_querying.html#take", 
        "first":"https://guides.rubyonrails.org/active_record_querying.html#first",
        "last":"https://guides.rubyonrails.org/active_record_querying.html#last",
        "find_by":"https://guides.rubyonrails.org/active_record_querying.html#find-by",
    }

    return(
        <div>
            
            {arrayFromInput.map(substring => {
                if(substring in commandsFromDocumentation)
                    return <a href={commandsFromDocumentation[substring]}> {substring} </a>
            })}

        </div>
    )
}       

export default QueryAnswer;