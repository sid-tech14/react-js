import React, { Component } from 'react'

class Stat extends Component {
    render() {
        const stats = [
            {
                Team: 'Real Madrid',
                Games: 438,
                Goals: 450
            },
            {
                Team: 'Sporting CP',
                Games: 31,
                Goals: 5
            },
            {
                Team: 'Portugal',
                Games: 197,
                Goals: 120
            },
            {
                Team: 'Total',
                Games: 1156,
                Goals: 830 
            },
        ]
        const Total = stats.map((item, idx) => {
            console.log(item)

            return (

                <div style={{fontFamily:"sans-serif"}}>
                    <h3>Team: {item.Team}</h3>
                    <h3>Games Played: {item.Games}</h3>
                    <h3>Goals: {item.Goals}</h3>
                </div>

            )
        })
        

        return (
            <>
            <div style ={{textAlign:"center", display:"flex", justifyContent:"space-evenly", background:"grey", color: 'black'}}>
                {Total}
            </div>
            </>
        )
    }
}
export default Stat;