import styled from "styled-components";

export const CardStyled = styled.div`
    /* box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px; */
    /* border-radius: 10px; */
    padding: 60px;
    /* margin: 40px 0px; */
    display: flex;
    align-items: center;
    background-color: white;
    flex-direction: ${({ layout }) => layout || 'row'};



    img{
        width: 80%;
    }

    &>div{
        flex: 1;
    }

    @media (max-width: ${({ theme }) => theme.mobile}) {
        flex-direction: column;
    }
`

