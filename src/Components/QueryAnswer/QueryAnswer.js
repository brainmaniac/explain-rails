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
        <div className="answer">
            
            {arrayFromInput.map((substring, key) => {
                if(substring in commandsFromDocumentation)
                    if(key === 0)
                        return <a className="link-blue" href={commandsFromDocumentation[substring]} key={key} target="_blank">{substring}</a>
                    else
                        return <span key={key} className="link-blue">.<a className="link-blue" href={commandsFromDocumentation[substring]} target="_blank">{substring}</a></span>

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