import React, { useState } from 'react';
import ImageContainer from './Components/ImageContainer';
import TextContainer from './Components/TextContainer';
import ButtonContainer from './Components/ButtonContainer';

import images from './assets/images';
import texts from './assets/texts';

function App() {
  const [image, setImage] = useState(0);
  const [text, setText] = useState(0);
  const [success, setSuccess] = useState(false);
  return (
    <React.Fragment>
      <ImageContainer src={images[image]} />
      {/*  */}
      {success ? (
        <TextContainer text={'Woo!'} />
      ) : (
        <TextContainer text={texts[text]} />
      )}
      {/*  */}
      <ButtonContainer />
    </React.Fragment>
  );
}

export default App;
