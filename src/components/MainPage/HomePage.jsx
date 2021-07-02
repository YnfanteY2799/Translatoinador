import React, { useState } from 'react';

const HomePage = () =>{

    const [translatedText, setTranslatedText] = useState("");

    var fetchDictionaryAndTranslate = async ({target:{value}})=>{

        if(value.length > 1 && !value.includes(" ")){
            let response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en_US/Hey`);
            response = response.json();
            response.then(resp => {
    
                let { word, phonetics, meanings } = resp[0];
                console.log("Word : ",word)
                console.log("Phonetics : ",phonetics)
                console.log("Meanings : ",meanings)
                
            });
        }

        console.log(Window.getSelection())

        setTranslatedText(value);

    }

    
    return(
        <div >
            <div className="translaitaneitor-div">
                <div className="mb-3">
                    <label className="form-label"><b> Text to Translate : </b></label>
                    <textarea className="form-control" rows="2" onChange={(e) => fetchDictionaryAndTranslate(e)}/>
                </div>
                <div className="mb-3">
                    <label className="form-label"><b> Translation : </b></label>
                    <textarea className="form-control" rows="2" readOnly value={translatedText} />
                </div>
            </div>
            
            <div>


            </div>

        </div>
    );
}




export default HomePage;