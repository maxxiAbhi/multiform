import React from 'react'

function TabBtn({ tabno, donno, activeno, mystep, controlSteps }) {
    return (
        <div className={`${donno === true ? `greencolor` : null} ${activeno === true ? `yellowcolor` : null}`} onClick={() => controlSteps(mystep)}>{tabno}</div>
    )
}

export default TabBtn