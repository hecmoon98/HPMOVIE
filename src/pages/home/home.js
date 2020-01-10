import React, { Component } from 'react';
import Banner from "./../../component/banner";
import Movie from "./../../component/movie";
import Cinema from "./../../component/cinema";

export default class Home extends Component {
    render() {
        return (
            <div>
                <Banner />
                <Movie />
                
                <Cinema />


            </div>
        )
    }
}
