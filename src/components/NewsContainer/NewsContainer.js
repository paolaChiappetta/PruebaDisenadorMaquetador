import * as React from 'react';
import './NewsContainer.scss';
import New from '../New/New';
import photo2 from './photo 02.png';
import photo3 from './photo 03.png';
import photo4 from './photo 04.png';

const NewsContainer = () => {
    return (
        <main className='newsContainer'>
            <section>
                <New
                img={photo2}
                title='Heading 4'
                content='Cómo mejorar el clima, el capital humano, la comunicación o las negociaciones en una empresa?'/>
            </section>
            <section>
                <New
                img={photo3}
                title='Heading 4'
                content='Cómo mejorar el clima, el capital humano, la comunicación o las negociaciones en una empresa?'/>
            </section><section>
                <New
                img={photo4}
                title='Heading 4'
                content='Cómo mejorar el clima, el capital humano, la comunicación o las negociaciones en una empresa?'/>
            </section><section>
                <New
                img={photo2}
                title='Heading 4'
                content='Cómo mejorar el clima, el capital humano, la comunicación o las negociaciones en una empresa?'/>
            </section><section>
                <New
                img={photo3}
                title='Heading 4'
                content='Cómo mejorar el clima, el capital humano, la comunicación o las negociaciones en una empresa?'/>
            </section><section>
                <New
                img={photo4}
                title='Heading 4'
                content='Cómo mejorar el clima, el capital humano, la comunicación o las negociaciones en una empresa?'/>
            </section>
        </main>
    );
}

export default NewsContainer