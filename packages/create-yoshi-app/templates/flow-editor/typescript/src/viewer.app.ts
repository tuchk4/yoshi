/*  Here you can take some values from the platform and return object with something you need.
    It will be available as an `appData` argument's property in your controller.*/
export const mapPlatformStateToAppData = ({
  platformParams,
  controllerConfigs,
  flowData,
}: any): { foo: string } => {
  console.log({ platformParams, controllerConfigs, flowData });

  return { foo: 'bar' };
};
