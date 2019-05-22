import React from 'react';
import styled from 'styled-components';
import user_page from '../../images/user/user_page.jpeg';
import logo from '../../images/logo/logo.png';
import './logare.css'

const Wrapper = styled.div`
    width:100%;
    display: flex;
    min-height: calc(100% - 92px);
    -ms-flex-pack: center;
    justify-content: center;
    -ms-flex-align: center;
    align-items: center;
    padding:75px;
`
const Container = styled.div`
    width:1200px;
    margin: 0 auto;
    background-color: #fff;
    padding: 0;
    box-shadow: 0 5px 50px 0 rgba(0,0,0,.15);
`
const Logo = styled.img`
    width:100%;
    margin: 0 auto;
`
const LogoWrap = styled.div`
    display: block;
    margin: 25px 0 25px 0;

`

const Row = styled.div`
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    margin-right: 0;
    margin-left: 0;
`
const Left = styled.div`
    flex: 0 0 49%;
    max-width: 49%;
    border-right: 1px solid rgba(192,192,192,0.4);
`
const Right = styled.div`
    flex: 0 0 50%;
    max-width: 50%;
`
const LoginImage = styled.img`
    width:100%;
    margin:0 auto;
`
const ImageWrap = styled.div`
    display: block;
    margin: 50px 0 0 0;
`
const Login = styled.div`
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-justify-content: center;
    -moz-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-align-items: center;
    -moz-box-align: center;
    -ms-flex-align: center;
    align-items: center;
`
const TitleCenter = styled.div`
    text-align: center!important;
    padding:150px;
`
const Title = styled.h1`
    color: #3b3e40;
    font-weight: 500;
    font-size: 30px;
    padding:50px;
`

const Form = styled.form`
    margin-top: 5px;
    width: 300px;
    margin: 0 auto;
`

const FormRow = styled.div`
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    margin-right: 0;
    margin-left: 0;
`
const FormElement = styled.div`
    width: 100%;
    height: 44px;
    margin: 20px 0 0;
    display: -ms-flexbox;
    display: flex;
    position: relative;

`
const Input = styled.input`
    position: relative;
    width: 100%;
    height: 44px;
    padding: 20px 0 0 10px;
    display: block;
    border-radius: 2px;
    border: 1px solid #ddd;
    background: transparent;
    margin: 5px;
    padding:5px;
`
const Register = styled.p`
    cursor:pointer;
    color:#44a8f2;
    text-decoration:none;
    margin-top:15px;
`
const RegisterWrap = styled.div`
margin-top:25px;
`
const Inregistrare = ({ onRouteChange }) => {
    return(
        <Wrapper>
            <Container>
                <Row>
                    <Left>
                        <LogoWrap><Logo src={logo} alt="Osmo Pocket"/></LogoWrap>
                        <ImageWrap><LoginImage src={user_page} alt="Osmo Pocket"/></ImageWrap>
                    </Left>
                    <Right>
                        <Login>
                            <TitleCenter>
                                <Title>INREGISTRARE</Title>
                                    <Form>
                                        <FormRow>
                                            <FormElement>
                                                <Input type="email" name="username" maxlength="100" placeholder="Adresa de email*"></Input>
                                            </FormElement>
                                        </FormRow>
                                        <FormRow>
                                            <FormElement>
                                                <Input type="email" name="username" maxlength="100" placeholder="Adresa de email*"></Input>
                                            </FormElement>
                                        </FormRow>
                                        <FormRow>
                                            <FormElement>
                                                <Input type="password" name="password" maxlength="100" placeholder="Parola*"></Input>
                                            </FormElement>
                                        </FormRow>
                                        <FormRow>
                                            <FormElement>
                                                <Input onClick={() => onRouteChange('home')} className="submitBtn" type="submit" name="submit" value="Creaza cont"></Input>
                                            </FormElement>
                                        </FormRow>
                                    </Form>
                                    <RegisterWrap>
                                        <Register onClick={() => onRouteChange('logare')}>Logheaza-te</Register>
                                    </RegisterWrap>
                            </TitleCenter>
                        </Login>
                    </Right>
                </Row>
            </Container>
        </Wrapper>
    );
}

export default Inregistrare;