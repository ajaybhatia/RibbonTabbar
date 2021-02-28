import React from 'react';
import {Text, Image, TouchableWithoutFeedback} from 'react-native';
import styled from 'styled-components/native';
import {t} from 'react-native-tailwindcss';
import {Transition, Transitioning} from 'react-native-reanimated';

import Images from '../assets/images';

const bgColors = {
  home: t.bgRed400,
  camera: t.bgBlue400,
  profile: t.bgGreen400,
  settings: t.bgOrange400,
};

const Container = styled(TouchableWithoutFeedback)``;

const Background = styled(Transitioning.View)`
  ${[
    t.flexGrow,
    t.flexRow,
    t.itemsCenter,
    t.justifyCenter,
    t.roundedFull,
    t.m2,
    (props) => (props.focused ? bgColors[props.label] : t.bgWhite),
  ]};
`;

const Label = styled(Text)`
  ${[t.mL2, t.textWhite]}
`;

const Icon = styled(Image)`
  ${[t.h5, t.w5]}
`;

const Tab = ({label, accessibilityState, onPress}) => {
  const focused = accessibilityState.selected;
  const icon = focused ? Images.icons[`${label}Focused`] : Images.icons[label];

  const transition = (
    <Transition.Sequence>
      <Transition.In type="fade" durationMs={0} />
      <Transition.Change interpolation="easeInOut" delayMs={50} />
      <Transition.Out type="fade" durationMs={10} />
    </Transition.Sequence>
  );

  const ref = React.useRef();

  return (
    <Container
      onPress={() => {
        ref.current.animateNextTransition();
        onPress();
      }}>
      <Background
        style={[focused && t.shadowMd]}
        focused={focused}
        label={label}
        transition={transition}
        ref={ref}>
        <Icon source={icon} />
        {focused && (
          <Label>{label.charAt(0).toUpperCase() + label.slice(1)}</Label>
        )}
      </Background>
    </Container>
  );
};

export default Tab;
