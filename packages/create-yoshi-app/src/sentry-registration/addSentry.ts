import path from 'path';
import fs from 'fs-extra';
import Listr from 'listr';

// We need to mock pkg.json in current directory, so add-sentry tool will find this file and use for configuration
const PKG_FILE_NAME = path.join(process.cwd(), 'package.json');
const addPackageJSONMock = () => {
  const tempPkgContent = JSON.stringify({
    devDependencies: {
      typescript: 'latest',
    },
  });
  fs.writeFileSync(PKG_FILE_NAME, tempPkgContent);
};

const removePackageJSONMock = () => {
  fs.unlinkSync(PKG_FILE_NAME);
};

export const addSentry = ({
  teamName,
  projectName,
}: {
  teamName: string;
  projectName: string;
}) => {
  addPackageJSONMock();
  const tasks = require('@wix/add-sentry/lib/tasks');
  const {
    configureSentry,
    handleError,
  } = require('@wix/add-sentry/lib/sentry');

  removePackageJSONMock();
  configureSentry();

  const tasksToExecute = [
    tasks.createSentryTeam(teamName),
    tasks.createSentryProject(projectName, teamName),
    tasks.getSentryProjectDSNKeys,
  ];

  const taskRunner = new Listr(tasksToExecute);

  return taskRunner
    .run()
    .then(ctx => {
      tasks.printProjectLink(ctx);
      return ctx;
    })
    .catch(handleError);
};
