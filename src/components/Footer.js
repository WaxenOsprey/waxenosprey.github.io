import styled from 'styled-components';

const Footer = () => {

    const email = 'paulsamuelcummingdev@gmail.com';


    return ( 
        <>
        <SideEmailContainer>
            <SideEmail>
                <Email href={`mailto:${email}`}>paulsamuelcummingdev@gmail.com</Email>
            </SideEmail>
        </SideEmailContainer>
        <FooterContainer>
            <FooterContent>Website built with React JS and hosted on GitHub pages. Paul Cumming 2023.</FooterContent>
        </FooterContainer>

        </>
     );
}

const FooterContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    margin-left: 10%;
    margin-right: 10%;
    margin-top: 2rem;
    margin-bottom: 2rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
    width: 100%;
`;

const FooterContent = styled.p`
    color: rgb(203,214,244);
    border-bottom: 1px solid rgb(203,214,244);
    padding: 0.5rem;
`;

const SideEmailContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    width: 100%;
    margin-top: auto;
`;
const SideEmail = styled.p`
    color: rgb(203,214,244);
    font-size: 1rem;
    padding-right: 1rem;
    padding: 0.3rem;
    line-height: 1.5;
    border-top: 1px solid rgb(203,214,244);
    /* border-right: 2px solid rgb(203,214,244); */
    transform: rotate(90deg);

    &:hover{
        border-top: 1px solid rgb(92,188,177);
    }
`;

const Email = styled.a`
    text-decoration: none;
    color: rgb(203,214,244);

    &:hover {
        color: rgb(92,188,177);
    }
`
 
export default Footer;