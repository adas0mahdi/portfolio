import "./qualifications.css"


const Qualification = () => {
    return(
        <div>
            <span className="quali-text">My Qualication</span>
            <div className="qualification-container">
                <div className="qualification">
                    <div className="content html"></div>
                    <h1>html</h1>
                </div>
                <div className="qualification">
                    <div className="content tailwind"></div>
                    <h1>tailwind</h1>
                </div>
                <div className="qualification">
                    <div className="content css"></div>
                    <h1>css</h1>
                </div>
                <div className="qualification">
                    <div className="content javascript"></div>
                    <h1>javascript</h1>
                </div>
                <div className="qualification">
                    <div className="content bootstrap"></div>
                    <h1>bootstrap</h1>
                </div>
                <div className="qualification">
                    <div className="contentreact react"></div>
                    <h1>react</h1>
                </div>
                <div className="qualification">
                    <div className="content mongoDB"></div>
                    <h1>mongoDB</h1>
                </div>
                <div className="qualification">
                    <div className="content postman"></div>
                    <h1>postman</h1>
                </div>
                <div className="qualification">
                    <div className="content wordpress"></div>
                    <h1>wordpress</h1>
                </div>
            </div>
        </div>
    );
}

export default Qualification;