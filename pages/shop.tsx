import React from 'react';

import ShopComponent from '../components/GuestAndLoggedinPages/Shop';
import { buildGuestOrLoggedInLayout } from '../components/Layouts/layoutBuilder';
import firebaseItemRepository from '../modules/item/firebaseItemRepository';
import ItemEntity from '../modules/item/ItemEntity';

const itemRepository = new firebaseItemRepository();

interface Props {
  items: ItemEntity[];
}

interface staticProps {
  props: Props;
}

const Shop: React.FC<Props> = ({ items = [] }) => {
  return <ShopComponent items={items} />;
};

export const getStaticProps = async (): Promise<staticProps> => {
  const items = await itemRepository.getAll();
  return { props: { items: JSON.parse(JSON.stringify(items)) } };
};

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
Shop.getLayout = buildGuestOrLoggedInLayout();
export default Shop;
