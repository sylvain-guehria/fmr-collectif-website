import React from 'react';
// @material-ui/core components
import Button, { Color } from '../lib/CustomButtons/Button';

type Props = {
  socialMedias: SocialMedia[];
};

export type SocialMedia = {
  name: string;
  link: string;
  color: Color;
};

const SocialMediaIconLinks: React.FC<Props> = ({ socialMedias = [] }) => {
  return (
    <div>
      {socialMedias.map(({ color, link, name }, index) => (
        <Button href={link} target="_blank" justIcon simple color={color} key={name + index}>
          <i className={`fab fa-${name}`} />
        </Button>
      ))}
    </div>
  );
};
export default SocialMediaIconLinks;
