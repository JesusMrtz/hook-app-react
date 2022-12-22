import { memo } from "react";


export const SmallComponent = memo( ({ counter }) => {
    memo
    console.log('Me volví a generar :( !!!');

    
    return(
        <>
            <small>{ counter }</small>
        </>
    )
});