import React from 'react';
import { ChildComponent } from './child.component';

export const ParentComponent: React.FC<any>  = () => {
    return <>
        <ChildComponent name={"andy"}>
            whatever...
        </ChildComponent>
    </>
}
