import React from 'react'


function TeacherPage(props){

    return(
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-8 col-md-offset-2">
                        <div className="panel panel-default">
                            <div className="panel-heading">Teacher Dashboard</div>

                            <div className="panel-body">
                                This is Teacher Dashboard. You must be privileged to be here !
                            </div>

                                <pre>
                             {props.user&&JSON.stringify(props.user)}
                             </pre>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}export default TeacherPage;
