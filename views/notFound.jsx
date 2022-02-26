const React = require('react')
const Default = require('./layouts/default')

function NotFound() {
    // Confirm we are getting our bread data in the terminal.
    // console.log(bread.name)
    return (
        <Default>
            <h1>404 NOT FOUND</h1>
        </Default>
    )
}

module.exports = NotFound