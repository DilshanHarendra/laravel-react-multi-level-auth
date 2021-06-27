import React from 'react'


function HomePage(props){

    return(
        <div>
            <div className="container">
                <h3>Multi User Authentication</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A alias asperiores aspernatur, consequuntur debitis eaque ex in itaque, modi molestias necessitatibus nisi odit perferendis quaerat quam quasi quisquam quos suscipit.</p>
                <pre>
                            {props.user&&JSON.stringify(props.user)}
                </pre>

            </div>
        </div>
    )
}export default HomePage;
