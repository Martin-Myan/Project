import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { set_a, set_users } from '../Actions/main';

const Comp = ({ a, setA, setUsers, users }) => {

    useEffect(() => {
        console.log(users, 'componentDidMount');
    }, []);

    useEffect(() => {
        console.log(users, 'users state-@ poxveluc het');
    }, [users]);

    const changeUserValue = () => {
        setUsers();
    };

    return (
        <div onClick={() => changeUserValue()}>
            akdhgfhedhagdhogajdfhhgjhhhhhh
        </div>
    )
}

const mapStateToProps = ({ main: { a, users }}) => ({
    a,
    users,
});

const mapDispatchToProps = dispatch => ({
    setA: a => dispatch(set_a(a)),
    setUsers: () => dispatch(set_users()),
})

export default  connect(mapStateToProps, mapDispatchToProps)(Comp);