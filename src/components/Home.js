import React from 'react'
import { Button, Table } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import array from './array';
import { Link, useNavigate } from 'react-router-dom';

function Home() {

    let history = useNavigate()

    // You may skip this part if you're
    // using react-context api or redux
    function setID(id, name, age) {
        localStorage.setItem('id', id);
        localStorage.setItem('Name', name);
        localStorage.setItem('Age', age);
    }

    // Deleted function - functionality 
    // for deleting the entry
    function deleted(id) {

        var index = array.map(function (e) { return e.id; }).indexOf(id);

        // deleting the entry with index
        array.splice(index, 1)

        // We need to re-render the page for getting 
        // the results so redirect to same page.
        history('/')
    }

    return (
        <div style={{ margin: '10rem' }}>
            <div className="row mb-5 justify-content-end">
                <div className="col-4">
                    <Link className="d-grid gap-2 text-decoration-none" to='/adduser'>
                        <Button className='btn btn-warning btn-lg'>Add User</Button>
                    </Link>
                </div>
            </div>
            <Table striped bordered hover size="lg">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Update info...</th>
                        <th>Edit info...</th>
                    </tr>
                </thead>
                <tbody>
                    {array.map((item) => {
                        return (
                            <tr>
                                <td className='col-4'>{item.Name}</td>
                                <td className='col-4'>{item.Age}</td>
                                <td className='text-end col-2'>
                                    <Link to={`/userlist`}>
                                        <Button onClick={(e) =>
                                            setID(item.id, item.Name, item.Age)} className="info">
                                            Update
                                        </Button>
                                    </Link></td>
                                <td className='text-end col-2'><Button onClick={e => deleted(item.id)}
                                    variant="danger">Delete</Button></td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </div>
    )
}

export default Home