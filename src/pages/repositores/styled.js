import styled from "styled-components";
import { Link } from 'react-router-dom';

export const Container = styled.div`
    width: 100%;
    max-width: 791px;
    margin: 0 auto;
`

export const Title = styled.h1`
    text-align: center;
    font-size: 2.2rem;
    font-family: sans-serif;
    color: #333;
`;

export const List = styled.ul`
    list-style: none;
    font-size: 1.5rem;
    padding: 0;
    font-family: sans-serif;
    
`;

export const ListItem = styled.li`
    margin: 0.5rem 0;
    background-color: #40454F;
    color: #fff;
    padding-left: 4rem;
`;

export const LinkHome = styled(Link)`
    display: block;
    width: 8rem;
    text-align: center;
    margin: 2rem auto;
    background: #000;
    color: #fff;
    text-decoration: none;
`
