import React from 'react';
import ItemEntity from '../../modules/item/ItemEntity';
import firebaseItemRepository from '../../modules/item/firebaseItemRepository';
import StocksComponent from '../../components/Admin/stocks';
import { buildAdminOnlyLayout } from '../../components/Layouts/layoutBuilder';
import { arrayOf } from 'prop-types';

const itemRepository = new firebaseItemRepository();

const StocksPage = ({ items = [] })=> {
  return <StocksComponent items={items} />;
};

StocksPage.propTypes = {
  items: arrayOf(ItemEntity)
};

export const getStaticProps = async () => {
  const items = await itemRepository.getAll();
  return { props: { items: JSON.parse(JSON.stringify(items)) } };
};

StocksPage.getLayout = buildAdminOnlyLayout();
export default StocksPage;
