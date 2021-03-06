import React from 'react';
import styled from 'styled-components';
import profilePic from '../images/profile.jpg'

const ProfilePicStyles = styled.img`
max-height:250px;
max-width: 300px;
border-radius: 30px;
`


export default function AboutPage() {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-10">
                        <h1>Who I Am</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-5">
                        <ProfilePicStyles src={profilePic} alt="profile pic" />
                    </div>
                    <div className="col-md-7">
                        <p>
                            My name is Christopher Skogstad and I am currently doing a web development coding bootcamp at Monash
                            University. I have been a welder for the past 12 years and decided that now was the time to make a
                            change
                            into a field that is not only a fast growing one, but also one that interests me greatly.
                </p>
                        <p>Here is a link to my
                    <a
                                href="https://docs.google.com/document/d/1SZIXruqRdDWIeGSZdeir_cHqRU4UZq0yK1B9fxO7zNU/edit?usp=sharing"> Resume</a>
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <p>
                            My goal is to get enough knowledge to be able to get a career in this industry, but I know that
                            this
                            field
                            is one of constant evolution and learning, and I will have to work hard for the rest of my life
                            to
                            learn
                            about these things, and this excites me.
                        </p>

                    </div>

                </div>
            </div>
        </>
    )
}

