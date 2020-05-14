import { v4 as uuid } from 'uuid';
import { FlowBMModel } from './model';

const getStartUrl = ({ pages }: FlowBMModel) => {
  return `http://localhost:5000/business-manager/${uuid()}/${pages[0].route}`;
};

export default getStartUrl;
