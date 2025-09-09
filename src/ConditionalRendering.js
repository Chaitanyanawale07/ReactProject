import React from "react";

function ConditionalRendering({isLoggedIn})
{
    return(
        <div id="conditional">
        {isLoggedIn ? <h1> Welcome to ITvedant</h1>:<h1>Bye Bye</h1>};
        </div>
    );
}
export default ConditionalRendering;