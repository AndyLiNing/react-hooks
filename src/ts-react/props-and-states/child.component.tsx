import React from 'react';

type ChildType = {
    name: string
    children: React.ReactNode
}

export const ChildComponent: React.FC<ChildType>  = ({name}) => {
    return <>
        <div>
          Name:  { name }
        </div>
    </>
}
