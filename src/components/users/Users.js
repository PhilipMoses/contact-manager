import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'
import { compose } from 'redux';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner'
import { firestoreConnect } from 'react-redux-firebase';

class Users extends Component {

    state = {
        total:null
    }

    static getDerivedStateFromProps(props, state) {
        const { users } = props;

        if(users) {
            const total = users.reduce((total,user) => {
                return total + parseFloat(user.balance.toString());
            }, 0);

            return {total}
        }
        return null;
    }
    
    render() {
        const {users} = this.props;
        const {total} = this.state;

        if(users){
            return(
                <div>
                    <div className="row">
                        <div className="col-md-6">
                            <h2>
                                {''}
                                <i className="fas fa-users" />users{''}
                            </h2>
                        </div>
                        <div className="col-md-6" >
                            <h5 className="text-right text-secondary">
                                Total {''}
                                <span className="text-primary">
                                    ₹ {parseFloat(total).toFixed(2)}
                                </span>
                            </h5>
                        </div>
                    </div>
                    <table className="table table-striped">
                        <thead className="thead-inverse">
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Balance</th>
                                <th />
                            </tr>
                        </thead>
                        <tbody>
                            {users.map(user => (
                                <tr key={user.id}>
                                    <td>{user.firstName} {user.lastName}</td>
                                    <td>{user.email}</td>
                                    <td>₹ {parseFloat(user.balance).toFixed(2)}</td>
                                    <td>
                                    <Link to={`/user/${user.id}`}
                                        className="btn btn-secondary  btn-sm"
                                        >
                                        <i className="fas fa-arrow-circle-right" /> Details
                                    </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            );
        }else{
            return (
            <div>
                <Spinner />
            </div>
            )
        }
    }
}

Users.propTypes = {
    firestore: PropTypes.object.isRequired,
    users: PropTypes.array
};

export default compose(
    firestoreConnect([{ collection: 'users'}]),
    connect((state,props) => ({
        users: state.firestore.ordered.users
    }))   
)(Users);