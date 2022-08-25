import * as React from 'react';
import './Faq.scss';
import { useState } from 'react';

const Faq = ({question, answer}) => {

    const [answerVisible, setAnswerVisible] = useState(false);

    const answerOnClick = () => {
        if(answerVisible){
            setAnswerVisible(false);
        }else{
            setAnswerVisible(true);
        }
        
    };

    return (
        <div>
            <div className='faqContainer'>
                <div className='faq'>
                    <div className='faq__question'>
                        <h4>{question}</h4>
                    </div>
                    <button className='faq__button' onClick={answerOnClick}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.293 9.29297L12 13.586L7.70697 9.29297L6.29297 10.707L12 16.414L17.707 10.707L16.293 9.29297Z" fill="#414141"/>
                        </svg>
                    </button>
                </div>
            </div>
            {answerVisible ?
            <div className='faqAnswer'>
                <p>{answer}</p>
            </div> : <></>
            }
            </div>
    );
}

export default Faq