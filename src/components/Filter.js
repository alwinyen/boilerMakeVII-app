import React from "react";
class Filter extends React.Component {
    render() {
        return(
            <div id = "filter">
                <p id = "regionTitle">Region</p>
                <p id = "typeTitle">Type</p>
                <p id = "timeTitle">Time</p>
                <br/>
                <select id = "region">
                <option value = "america">America</option>
                <option value = "asia">Asia</option>
                <option value = "africa">Africa</option>
                <option value = "australia">Australia</option>
                <option value = "antarctica">Antarctica</option>
                <option value = "europe">Europe</option>
                <option value = "all">All</option>
                </select>
                <select id = "type">
                <option value = "environment">Environment</option>
                <option value = "politic">Politic</option>
                <option value = "all">All</option>
                </select>
                <select id = "time">
                <option value = "week">Past Week</option>
                <option value = "month">Past Month</option>
                <option value = "year">Past Year</option>
                <option value = "all">All</option>
                </select>
            </div>
        )
    }
}

export default Filter;