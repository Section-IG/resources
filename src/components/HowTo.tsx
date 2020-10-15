import React from 'react';
import { Alert, Badge, Tooltip, OverlayTrigger } from 'react-bootstrap';
import useStorage from '../hooks/useStorage';

const HowTo: React.FC = () => {
  const [shown, setShown] = useStorage('showHowTo', true);

  if (shown) {
    return (
      <Alert className='mt-3' variant='success' dismissible onClose={() => setShown(false)}>
        <Alert.Heading>Une petite explication</Alert.Heading>
        <p>
          Ce site web offre la possibilité aux étudiants, alumni et professeurs
          de l'IESN de garder une liste de supers ressources.
        </p>
        <p>
          N'hésitez pas à partager vos outils, IDEs, plugins, extensions ou
          toute autre chose que vous trouvez intéressante et utile.
        </p>
        <hr />
        <p className='mb-0'>
          &#x26A0; Une fois ajouté à la liste, votre item ne peut plus être
          modifié ou supprimé. Réfléchissez-y donc à deux fois!
        </p>
      </Alert>
    );
  }

  return (
    <OverlayTrigger 
      key='right' 
      placement='right' 
      overlay={<Tooltip id='tooltip-right'>Plus d'infos sur le site</Tooltip>}
    >
      <Badge as='a' pill variant='secondary' href='#' onClick={() => setShown(true)}>?</Badge>
    </OverlayTrigger>
  );
};

export default HowTo;
