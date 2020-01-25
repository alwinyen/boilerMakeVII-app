import React from "react";
import MapChart from "../MapChart";
import ReactTooltip from "react-tooltip";
import { markers } from '../constant/markers'
class Filter extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            region: "all",
            type: "all",
            time: "all",
            markers: markers
        };

        this.handleRegionChange = this.handleRegionChange.bind(this);
        this.handleTypeChange = this.handleTypeChange.bind(this);
    }

    handleRegionChange(event) {
        this.setState({"region": event.target.value});
    }

    handleTypeChange(event) {
        this.setState({"type": event.target.value});
    }


    componentDidUpdate(prevProps, prevState) {
        
        var filteredMarkers = markers.filter(marker => {
            if (this.state.type != "all") {
                return marker.type == this.state.type
            }
                return marker
        }).filter(marker => {
            if (this.state.region != "all") {
                return marker.region == this.state.region
            }
            return marker
        });

        if (this.state.markers == prevState.markers) {
            this.setState({markers: filteredMarkers})
        }
        console.log(this.state.markers)
        console.log(prevState.markers)
    }

    render() {

        return(
            <React.Fragment>
                <div id = "filter">
                    <p id = "regionTitle">Region</p>
                    <p id = "typeTitle">Type</p>
                    <br/>
                    <select id = "region" onChange={this.handleRegionChange}>
                        <option value = "all">All</option>
                        <option value = "america">America</option>
                        <option value = "asia">Asia</option>
                        <option value = "africa">Africa</option>
                        <option value = "australia">Australia</option>
                        <option value = "antarctica">Antarctica</option>
                        <option value = "europe">Europe</option>
                    </select>
                    <select id = "type" onChange={this.handleTypeChange}>
                        <option value = "all">All</option>
                        <option value = "environment">Environment</option>
                        <option value = "politic">Politic</option>
                        <option value = "outbreak">Outbreak</option>
                    </select>
                </div>
                <div id = "map">
                    <MapChart setTooltipContent={this.props.setContent} markers = {this.state.markers}/>
                    <ReactTooltip>{this.props.content}</ReactTooltip>
            </div>
           </React.Fragment>
        )
    }
}

export default Filter;