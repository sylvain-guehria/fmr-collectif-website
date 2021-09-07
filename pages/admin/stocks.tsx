import React from 'react';
import ItemEntity from '../../modules/item/ItemEntity';
import firebaseItemRepository from '../../modules/item/firebaseItemRepository';
import StocksComponent from '../../components/Admin/stocks';
import { buildAdminOnlyLayout } from '../../components/Layouts/layoutBuilder';

const itemRepository = new firebaseItemRepository();

interface Props {
  items: ItemEntity[];
}
interface staticProps {
  props: Props;
}
const StocksPage: React.FC<Props> = ({ items = [] }) => {
  return <StocksComponent items={items} />;
};

export const getStaticProps = async (): Promise<staticProps> => {
  const items = await itemRepository.getAll();
  return { props: { items: JSON.parse(JSON.stringify(items)) } };
};
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
StocksPage.getLayout = buildAdminOnlyLayout();
export default StocksPage;
