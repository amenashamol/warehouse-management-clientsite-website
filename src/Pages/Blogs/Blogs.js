import React from 'react';
import PageTitle from '../PageTitle/PageTitle';
import './Blogs.css'

const Blogs = () => {
    
    return (
        <div>
         <div className='auth'>
                <h2> #Difference between authorization and authentication:</h2>
                <p>
                In the digital world, authentication and authorization accomplish these same goals. Authentication is used to verify that users really are who they represent themselves to be. Once this has been confirmed, authorization is then used to grant the user permission to access different levels of information and perform specific functions, depending on the rules established for different types of users.Authentication works through passwords, one-time pins, biometric information, and other information provided or entered by the user.Authorization works through settings that are implemented and maintained by the organization.
                </p>   
            </div>
   
          <div className='firebase'>
            <h2> #Firebase Use Cases:</h2>
            <p >
            Google Firebase offers many features that pitch it as the go-to backend development tool for web and mobile apps. It reduces development workload and time. And it's a perfect prototyping tool. Firebase is simple, lightweight, friendly, and industrially recognized
            </p> 
            <h2>#Other options to implement authentication:</h2>
            <h5> Top Alternatives to Firebase Authentication:</h5> 
            <li>Cloud Firestore</li>
                <li> Auth0</li>
                <li>Amazon Cognito </li> 
                <li>Passport   </li>
                <li>MongoDB</li>
                <li>JSON      </li>
                <li>Web Token  </li>  
                <li>Okta </li>  
               
               
          </div> 

           <div className='firebase-service'>
            <h2> #other services of firebase other than authentication:</h2>
            <p >
                There are many services which Firebase provides other than authentication, Most useful of them are:</p> 
                <li>Cloud Firestore</li>
                <li>Cloud Functions</li>
                <li>Hosting        </li> 
                <li>Cloud Storage   </li>
                <li>Google Analytics</li>
                <li>Predictions     </li>
                <li>Cloud Messaging  </li>  
               
          </div> 
          <PageTitle title="Blogs"></PageTitle>    
        </div>
    );
};

export default Blogs;