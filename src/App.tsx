import React from 'react';
import { MainContainer } from './styles/GlobalStyles';
import Display from './componets/display/Display';
import { Options } from './componets/options/Options';
import Slider from './componets/UI/slider/Slider';
import CheckBox from './componets/UI/checkBox/CheckBox';
import StrengthMeter from './componets/strengthMeter/StrengthMeter';
import GenerateButton from './componets/UI/button/GenerateButton';
function App() {
  return (
    <MainContainer>
      <h1>Password Generator</h1>
      <Display />
      <Options>
        <Slider />
        <CheckBox text="Include Uppercase Letters" tag="uppLetters" />
        <CheckBox text="Include Lowercase Letters" tag="lowLetters" />
        <CheckBox text="Include Numbers" tag="numbers" />
        <CheckBox text="Include Symbols" tag="symbols" />
        <StrengthMeter />
        <GenerateButton />
      </Options>
    </MainContainer>
  );
}

export default App;
