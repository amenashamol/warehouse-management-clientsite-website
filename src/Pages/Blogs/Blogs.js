import React from 'react';
import PageTitle from '../PageTitle/PageTitle';
import './Blogs.css'

const Blogs = () => {
    
    return (
        <div>
         <div className='java-node'>
                <h2> #Difference between javascript and nodejs:</h2>
                <p>
                Javascript is a programming language that is used for writing scripts on the website. 
                NodeJS is a Javascript runtime environment.Javascript can only be run in the browsers.We can run Javascript outside the browser with the help of NodeJS.Javascript is basically used on the client-side.NodeJS is mostly used on the server-side.Javascript is capable enough to add HTML and play with the DOM.Nodejs does not have capability to add HTML tags.Javascript can run in any browser engine as like JS core in safari and Spidermonkey in Firefox. V8 is the Javascript engine inside of node.js that parses and runs Javascript.
                </p>   
            </div>
   
          <div className='sql-nosql'>
            <h2> #Differences between sql and nosql databases:</h2>
            <p >
            SQL databases are primarily called as Relational Databases (RDBMS); whereas NoSQL database are primarily called as non-relational or distributed database.SQL databases defines and manipulates data based structured query language .A NoSQL database has dynamic schema for unstructured data.SQL databases are table-based on the other hand NoSQL databases are either key-value pairs, document-based, graph databases or wide-column stores.SQL databases follow ACID properties (Atomicity, Consistency, Isolation and Durability) whereas the NoSQL database follows the Brewers CAP theorem (Consistency, Availability and Partition tolerance). 
            </p> 
             
               
               
          </div> 

           <div className='jwt'>
            <h2> #purpose of jwt and how does it work:</h2>
            <p >
            JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server.For beginning developers, JSON stands for JavaScript Object Notation and is a text-based format for transmitting data across web applications. It stores information in an easy-to-access manner, both for developers and computers.


            JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.
            
            </p> 
                 
               
          </div> 
          <PageTitle title="Blogs"></PageTitle>    
        </div>
    );
};

export default Blogs;