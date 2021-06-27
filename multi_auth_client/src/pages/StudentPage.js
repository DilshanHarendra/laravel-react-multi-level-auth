import React from 'react'


function StudentPage(props){
    return(
        <div className="container">
            <div className="row">
                <div className="col-md-8 col-md-offset-2">
                    <div className="panel panel-default">
                        <div className="panel-heading">Student Dashboard</div>

                        <div className="panel-body">
                            This is Student Dashboard. You must be privileged to be here !
                        </div>
                        <pre>
                            {props.user&&JSON.stringify(props.user)}
                        </pre>
                    </div>
                </div>
            </div>
        </div>
    )
}export default StudentPage;
