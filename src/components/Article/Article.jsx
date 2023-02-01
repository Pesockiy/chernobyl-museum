import React from 'react'

const Article = ({content}) => {

    const data = content.content.map((part, index) => {
        if(part.type === 'paragraph'){
            return <div className='article__paragraph' key={index} dangerouslySetInnerHTML={{__html: part.content}}/>
        }

        if(part.type === 'images'){
            return (
                <div className='article__images' key={index}>
                    {part.content.map(item => (
                        <img className='article__images-item' src={item} alt='item' />
                    ))}
                </div>
            )
        }
        return ''
    })


    return (
        <div className='article'>
            <div className="article__cover">
                <img className="article__cover-image" src={content.cover} alt="cover" />
            </div>
            <div className='article__content'>{data}</div>
        </div>
    )
}

export default Article