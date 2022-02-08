import React from 'react';
import language from '../../../helpers/translate';
import {
  closeIcon2,
  heartFullIcon,
  heartIcon,
  trashIcon,
} from '../../../styles/icons';
import {
  CloseContainer,
  DeleteContainer,
  DeleteIcon,
  DeleteMessage,
  FavoriteContainer,
  OnlyIcon,
} from './IconButton.styled';

export const DeleteButton = ({onPress}: any) => (
  <DeleteContainer onPress={onPress}>
    <DeleteIcon source={trashIcon} />
    <DeleteMessage>{language.deleteItem}</DeleteMessage>
  </DeleteContainer>
);

export const CloseButton = ({onPress}: any) => (
  <CloseContainer onPress={onPress}>
    <OnlyIcon source={closeIcon2} />
  </CloseContainer>
);

export const FavoriteButton = ({onPress, favorite}: any) => (
  <FavoriteContainer onPress={onPress}>
    <OnlyIcon source={favorite ? heartFullIcon : heartIcon} />
  </FavoriteContainer>
);
