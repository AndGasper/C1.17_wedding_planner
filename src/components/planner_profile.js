import React, { Component } from 'react';

class PlannerProfile extends Component {

    render() {
        return (
            <div>
                <h2>Welcome Tim</h2>
                <img className='float-right' src='https://media.licdn.com/mpr/mpr/shrinknp_200_200/p/5/005/095/0d0/0796c17.jpg' />
                <ul className="list-group pull-left">
                    <li className='list-group-item'>Name: Tim</li>
                    <li className='list-group-item'>Company: Timder</li>
                    <li className='list-group-item'>9080 Irvine Center Drive Suite# 200</li>
                    <li className='list-group-item'>Irvine, CA 92618</li>
                    <li className='list-group-item'><p>Website: <a href='http://www.timder.com'>Timder</a></p></li>
                    <li className='list-group-item'>Specialty: Serial Killers</li>
                </ul>
            </div>
        );
    };
}

export default PlannerProfile;