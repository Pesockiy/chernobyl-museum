import React from 'react'
import { Icon } from '../Icon/Icon'

const ButtonMore = ({
    onClick = () => {},
    icon = '',
    iconSize = 0,
    children
}) => {


  return (
    <button type='button' className='button-more' onClick={onClick}>
        <span className='button-more__text heading-3'>{children}</span>
        {icon && (
            <Icon icon={icon} size={iconSize}/>
        )}
    </button>
  )
}

export default ButtonMore