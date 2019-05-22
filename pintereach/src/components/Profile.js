// react imports
import React from 'react';
// styled components imports
import styled from 'styled-components';

// styled components

// profile structure
const ProfileContainer = styled.div`
    width: 100%;
    margin: 2rem 0;
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
    font-size: 2rem;
    font-weight: bold;
    margin: 0.25rem 0;
`

const BioFollows = styled.span`
    font-size: 0.8rem;
`

const Bio = styled.p`
    width: 25rem;
    font-size: 1rem;
    font-weight: bold;
    margin: 1rem 0;
`

// avatar elements
const Avatar = styled.img`
    width: 200px;
    height: 200px;
    border-radius: 100px;
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