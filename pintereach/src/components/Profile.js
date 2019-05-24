// react imports
import React from 'react';
// styled components imports
import styled from 'styled-components';

// styled components

// profile structure
const ProfileContainer = styled.div`
    width: 100%;
    margin: 5rem 0;
`

const ProfileContent = styled.div`
    width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
`

const BioContainer = styled.div`
    width: 45%;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0px -2px 4px rgba(0, 0, 0, 0.1), 0px 2px 4px rgba(0, 0, 0, 0.1),
    2px 0px 4px rgba(0, 0, 0, 0.1), -2px 0px 4px rgba(0, 0, 0, 0.1);
    background-color: #2B2D42;
`

const AvatarContainer = styled.div`
    width: 45%;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
`

// bio elements
const BioTitle = styled.h2`
    font-size: 2.5rem;
    font-weight: bold;
    margin: 0.25rem 0;
    color: #EF233C;
`

const BioFollows = styled.span`
    font-size: 0.8rem;
    color: #D90429;
`

const Bio = styled.p`
    width: 25rem;
    font-size: 1rem;
    font-weight: bold;
    margin: 1rem 0;
    color: #EDF2F4;
`

// avatar elements
const Avatar = styled.img`
    width: 250px;
    height: 250px;
    border-radius: 150px;
    box-shadow: 0px -2px 4px rgba(0, 0, 0, 0.1), 0px 2px 4px rgba(0, 0, 0, 0.1),
    2px 0px 4px rgba(0, 0, 0, 0.1), -2px 0px 4px rgba(0, 0, 0, 0.1);
`

const Profile = () => {
    return (
        <ProfileContainer>
            <ProfileContent>
                <BioContainer>
                    <BioTitle>User Name</BioTitle>
                    <BioFollows>999 followers - 9 following</BioFollows>
                    <Bio>O-oooooooooo AAAAE-A-A-I-A-U- JO-oooooooooooo AAE-O-A-A-U-U-A- E-eee-ee-eee AAAAE-A-E-I-E-A-JO-ooo-oo-oo-oo EEEEO-A-AAA-AAAA</Bio>
                </BioContainer>

                <AvatarContainer>
                    <Avatar src="https://fivethirtyeight.com/wp-content/uploads/2015/10/kappadeseno_lede.jpg?w=575" alt="kappa" />
                </AvatarContainer>
            </ProfileContent>
        </ProfileContainer>
    );
};

export default Profile;