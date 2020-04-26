import React from 'react';

function ResourcePlanning() {
    return (
        <div className="container-fluid text-center">
            <div className="mt-4"><strong>COVID-19 Data Science Consortium</strong> / Health Resource Estimate Dashboard</div>
            <div className="container mt-5">This is a beta version. Accuracy of predictions is heavily dependant on assumptions and input data. Please refer to <a href="/">documentation</a> and read <a href="/">important information for users</a></div>
            <div className="row">
                <div className="col-8 mt-5 d-flex justify-content-center">
                    <nav className="nav">
                        <a className="nav-link active" href="/">Next Week</a>
                        <a className="nav-link" href="/">After 2 Weeks</a>
                        <a className="nav-link" href="/">After 2 Weeks</a>
                        <a className="nav-link" href="/">After 2 Weeks</a>
                    </nav>

                </div>
                <div className="col-4 row">
                    <div className="col-6">
                        <label htmlFor="state">Selected State</label>
                        <select className="form-control" id="state">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </div>
                    <div className="col-6">
                        <label htmlFor="district">Selected District</label>
                        <select className="form-control" id="district">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default ResourcePlanning;
