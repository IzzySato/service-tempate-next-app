import { sanityClient } from '../../../sanityConfig';
import { 
  getUniqueStringId,
  transformToReferenceData
 } from '../build/pageBuildSanity';

const formatRequestData = (
  customerInfo,
  comments,
  serviceType
) => {
  const transformed = transformToReferenceData(customerInfo);
  const formatData = {
    _id: getUniqueStringId(email),
    _type: 'customer',
    comments,
    serviceType,
    customerInfo: transformed
  }
  return formatData;
};

const insertRequest = async (
) => {
  await sanityClient.createOrReplace(formatRequestData(
    customerInfo,
    comments,
    serviceType
  ));
};

export {
  insertRequest
}