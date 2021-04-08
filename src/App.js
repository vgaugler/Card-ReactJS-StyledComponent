import React from 'react';
import styled from 'styled-components';
import './App.css';
import './number.png';

const Body = styled.body`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #1c1c25;
  height: 100vh;
  background-size: cover;
`;
const Container = styled.div`
  position: relative;
  width: 40%;
  height: 350px;
  padding: 15px;
  padding-bottom: 20px;
  border: 3px solid #111;
  background-image: url('https://www.10wallpaper.com/wallpaper/1366x768/1212/Doom_Hell-Aftermath_world_illustrator_wallpaper_1366x768.jpg');
  background-size: cover;
  border-radius: 15px;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.5);
  overflow: hidden;
  z-index: 1;
  transition: 0.5s;
  &:hover {
    transform: scale(1.1);
  }
`;

const Box1 = styled.div`
  height: 70%;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Before = styled.body`
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #ffe53b;
    background-image: linear-gradient(147deg, #ffe53b 0%, #ff2525 74%);

    -webkit-clip-path: polygon(0 55%, 100% 70%, 100% 100%, 0% 100%);
    clip-path: polygon(0 55%, 100% 70%, 100% 100%, 0% 100%);
  }
`;

const Par = styled.p`
  color: #0d1a26;
  font-family: 'Dela Gothic One', cursive;
  z-index: 10;
  font-size: ${(props) => props.fontSize.main};
  font-style: italic;
`;
const Par2 = styled.p`
  color: #0d1a26;
  font-family: 'Dela Gothic One', cursive;
  z-index: 10;
  font-size: ${(props) => props.fontSize.main};
  padding-left: 50px;
`;

const Quote = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 30%;
`;
const Avatar = styled.img`
  max-width: 250px;
  height: auto;
  z-index: -1;
  transition: 1s;
`;

const Logo = styled.img`
  max-width: 200px;
  height: auto;
  z-index: 10;
`;

const logo = 'https://upload.wikimedia.org/wikipedia/fr/f/f0/Doom_Logo.png';

const fontSize = {
  main: '12px',
};

function App() {
  const [imag, setImg] = React.useState(
    'http://pngimg.com/uploads/doom/doom_PNG32.png'
  );

  return (
    <Body>
      <Container
        onMouseOver={(e) =>
          setImg(
            'https://static.wikia.nocookie.net/vrchat-legends/images/0/0f/Xvso5oxjpv5y.png/revision/latest?cb=20180714202721'
          )
        }
        onMouseOut={(e) =>
          setImg('http://pngimg.com/uploads/doom/doom_PNG32.png')
        }
      >
        <Before></Before>
        <Box1>
          <Avatar src={imag} />
          <Logo src={logo} />
        </Box1>

        <Quote>
          <Par fontSize={{ main: '25px' }}>"Rip... and... tear!"</Par>
          <Par2 fontSize={fontSize}>
            ― The Slayer, after defeating a fellow Sentinel initiate in the
            Blood Arena
          </Par2>
        </Quote>
      </Container>
    </Body>
  );
}
export default App;
