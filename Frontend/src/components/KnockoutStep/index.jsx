export function node(num) {
    const calcHeight = 80 + 30 * Math.pow(2,Number(num));
    return (
        <div className="d-flex align-center" style={{ height: calcHeight }}>
            <div className="d-flex knockout flex-column j-between" >
                <div className="d-flex flex-column">
                    <div className="d-flex align-center">
                        <span className="knockout-before-number">9</span>
                        <div className="d-flex flex-column knockout-part">
                            <div className="knockout-item top d-flex">
                                <div className="knockout-item-number">1</div>
                                <div className="knockout-item-content"></div>
                            </div>
                            <div className="knockout-item bottom d-flex">
                                <div className="knockout-item-number">1</div>
                                <div className="knockout-item-content"></div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="d-flex flex-column">
                    <div className="d-flex align-center">
                        <span className="knockout-before-number">9</span>
                        <div className="d-flex flex-column knockout-part">
                            <div className="knockout-item top d-flex">
                                <div className="knockout-item-number">1</div>
                                <div className="knockout-item-content"></div>
                            </div>
                            <div className="knockout-item bottom d-flex">
                                <div className="knockout-item-number">1</div>
                                <div className="knockout-item-content"></div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="knockout-lines d-flex align-center">
                <div className="knockout-lines-block"></div>
                <div className="knockout-lines-bar"></div>
            </div>
        </div>)
}

export function root() {
    return (<div className="d-flex align-center">
        <span className="knockout-before-number">9</span>
        <div className="d-flex flex-column knockout-part">
            <div className="knockout-item top d-flex">
                <div className="knockout-item-number">1</div>
                <div className="knockout-item-content"></div>
            </div>
            <div className="knockout-item bottom d-flex">
                <div className="knockout-item-number">1</div>
                <div className="knockout-item-content"></div>
            </div>
        </div>
    </div>)
}