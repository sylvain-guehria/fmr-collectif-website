import React from 'react';
// core components
import GridContainer from 'components/lib/Grid/GridContainer';
import GridItem from 'components/lib/Grid/GridItem';
import Card from 'components/lib/Card/Card';
import CardHeader from 'components/lib/Card/CardHeader';
import CardBody from 'components/lib/Card/CardBody';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';

import overviewStyle from 'styles/jss/nextjs-material-kit-pro/pages/presentationSections/overviewStyle';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const useStyles = makeStyles(overviewStyle);

type Props = {
  url: string;
  citation: string;
};

const Citation: React.FC<Props> = ({ url, citation }) => {
  const classes = useStyles();

  const DivImgShadow = ({ url }: { url: string }): React.ReactElement => {
    return (
      <div
        className={classes.coloredShadow}
        style={{
          backgroundImage: `url('${url}')`,
          opacity: '1',
        }}
      />
    );
  };

  return (
    <Card plain profile>
      <GridContainer>
        <GridItem md={3} sm={3}>
          <CardHeader image plain>
            <a href="#pablo">
              <img src={url} alt="..." />
            </a>
            <DivImgShadow url={url} />
            <DivImgShadow url={url} />
          </CardHeader>
        </GridItem>
        <GridItem md={9} sm={9}>
          <CardBody plain className={classes.alignLeft}>
            <h4 className={classes.cardTitle}>Khaldi Yass</h4>
            <p className={classes.cardDescription}>
              {'"'}
              {citation}
              {'"'}
            </p>
          </CardBody>
        </GridItem>
      </GridContainer>
    </Card>
  );
};

export default Citation;
