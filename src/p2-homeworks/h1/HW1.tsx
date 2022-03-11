import React from 'react'
import Message, {MessageType} from "./Message";

const messageData: MessageType = {
    avatar: 'https://media.istockphoto.com/vectors/funny-cartoon-monster-face-vector-halloween-monster-square-avatar-vector-id1169881022?k=20&m=1169881022&s=170667a&w=0&h=1Kj7-Xy4jmIN0M0Xcm9lZ7aogPME1qi6wOtn0rvS2qc=',
    name: 'Chris',
    message: 'Nailed it!',
    time: '22:00'
}

function HW1() {
    return (
        <div>
            <hr/>
            <h4>Homework 1</h4>
            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />
            <hr/>
        </div>
    )
}

export default HW1
