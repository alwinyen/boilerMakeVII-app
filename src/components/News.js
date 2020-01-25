import React from "react";
class News extends React.Component {
    render() {
        return(
            <React.Fragment>
                <div id = "content1">
                    <img src = "../../australia wildfire.jpg"></img>
                    <div id = "text">
                        <h1>Australia Bushfire</h1>
                        <div id = "subtitle">
                            <strong>
                                The deadly wildfires, fanned by wind and fueled by scorching heat, are raging across the southeast of the country.
                            </strong>
                        </div>
                        <p>
                            Right now, Australia is being ravaged by one of the most devastating bushfire seasons the country has ever seen.
                            <br/><br/>
                            So far, more than 10 million hectares of Australian land has been burned. <br/> <br/>
                            It’s estimated that as many as 8,400 koalas have perished in fires on the mid-north coast of NSW and Kangaroo Island in South Australia has lost over 50% of their koala population This is a devastating blow for an iconic species already in decline, and these bushfires have the potential to hasten koalas’ slide towards extinction in eastern Australia. <br/> <br/>
    >                        Koalas could be extinct in the wild in eastern Australia in as little as 30 years due mainly to ongoing excessive tree-clearing for agricultural and urban development and climate heating triggered bushfires that destroy koala habitat, that potentially accelerate the extinction timeline.
                        </p>
                    </div>
                </div>
                <div id = "content2">
                    <h1>How can I help?</h1>
                    <a href = "https://www.savethekoala.com/donate" target="_blank">Donate to Save Koala!</a>
                    <a href = "https://www.redcross.org.au/get-involved/connect/volunteer" target="_blank">Volunteer With Australian Red Cross!</a>
                </div>
            </React.Fragment>
        )
    }
}

export default News;